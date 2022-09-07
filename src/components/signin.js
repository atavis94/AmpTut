import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import { useNavigate, useLocation } from 'react-router-dom';
  import { Auth } from 'aws-amplify'


const SignIn = ({ setLoggedIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const history = useNavigate();
    const loc = useLocation();
    {console.log(loc.pathname)}

    const signIn = async () =>{
        try{
            const user = await Auth.signIn(username, password);
            history('/');
            setLoggedIn(true);
            setError(false);
        } catch(e){
            setError(true);
            console.log('error signing in', e);
            alert('Could not sign in!');
        }
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    return (
    <div className="SignIn">
        <h2 className="block text-gray-700 text-xl font-bold mb-2 p-6">Nuber Sign In</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded max-w-md mx-auto border-2 border-indigo-800 items-center px-8 pt-6 pb-8 mb-4">
            {error ? <p>Error signing in. Please check your credentials.</p> : null}
            <div className="mb-4">  
                <label className="block text-gray-700 text-m font-bold mb-2">Username
                <input type="text" id="username" placeholder="Username" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setUsername(e.target.value)}></input>          
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-m font-bold mb-2">Password
                <input type="password" id="password" placeholder="Password" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setPassword(e.target.value)}></input>          
                </label>
            </div>

            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"onClick={signIn}>Sign In</button>
            <Link to="/signup"> <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full">Create Account</button> </Link>
      
        </form>


    </div>

) };

  export default SignIn;