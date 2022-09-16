import React, {useState} from "react";
import {
    Link
  } from "react-router-dom";
  import { useNavigate } from 'react-router-dom';
  import { Auth } from 'aws-amplify'


const SignIn = ({ setLoggedIn, password, username, setPassword, setUsername, refresh }) => {

    const [code, setCode] = useState('');

    const [siError, setSiError] = useState(false);
    const [reset, setReset] = useState(false);
    const history = useNavigate();

    const signIn = async () =>{
        try{
            const user = await Auth.signIn(username.trim(), password);
            history('/');
            setLoggedIn(true);
            setSiError(false);
            refresh();
        } catch(e){
            setSiError(true);
            console.log('error signing in', e);
            alert('Could not sign in!');
        }
    };

    const forgotPassword = async () =>{
        try{
            Auth.forgotPassword(username.trim())
            .then(data => console.log(data))
            .catch(err => console.log(err));
            setReset(true);
        } catch(e){
            setReset(false);
            console.log('error signing in', e);
            alert('Could not sign in!');
        }
    };

    const resetSignIn = async () =>{
        try{
            Auth.forgotPasswordSubmit(username.trim(), code.trim(), password)
            .then(data => console.log(data))
            .catch(err => console.log(err));
            history('/');
            setLoggedIn(true);
            setSiError(false);  
            
        } catch(e){
            setSiError(true);
            console.log('error signing in', e);
            alert('Could not sign in!');
        }
    };
 
    
    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    return (
    <div className="SignIn">
        
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded max-w-md mx-auto border-2 mt-16 border-indigo-800 items-center px-8 pt-6 pb-8 mb-4">
        <h2 className="block text-gray-700 text-xl font-bold p-3 mb-6">Sign in to Nuber! Beep Beep!</h2>
            {siError ? <p>Error signing in. Please check your credentials.</p> : null}

            <div className="mb-4">  
                <label className="block text-gray-700 text-m font-bold mb-2">Username
                <input type="text" id="username" placeholder="Username" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setUsername(e.target.value)}></input>          
                </label>
            </div>
            <div className="mb-6">
            { reset ? <label className="block text-gray-700 text-m font-bold mb-2">New Password </label> : <label className="block text-gray-700 text-m font-bold mb-2">Password </label>}
    
                <input type="password" id="password" placeholder="Password" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setPassword(e.target.value)}></input>          
            
            
            </div>

            { reset ? 
            <div className="mb-6">
                <label className="block text-gray-700 text-m font-bold mb-2">One-Time Code
                <input type="text" id="code" placeholder="Unique Code" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setCode(e.target.value)}></input>          
                </label>
            </div>

            : null }

            <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" onClick={reset ? resetSignIn : signIn}>Sign In</button>
            <Link to="/signup"> <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4">Create Account</button> </Link>
           
            <div className="mb-2 mt-3">
                <h3 className="text-purple-700 font-semibold hover:text-indigo-400" onClick={forgotPassword}>Forgot Password?</h3>
                {reset ? <p>If your username was correct you will receive a validation email.</p> : null}
            </div>
        </form>


    </div>

) };

  export default SignIn;