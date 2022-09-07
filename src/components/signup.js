import { Auth, Hub } from "aws-amplify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const SignUp = ({ setLoggedIn, signUp }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [type, setType] = useState('Customer');
    const [name, setName] = useState('');
    const history = useNavigate();
    const [error, setError] = useState(false);

    async function signUp() {
        if(validateInput){
            try {
                const { user } = await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        email,
                        'custom:type': type,
                        'custom:person' : name  
                        
                    },
                    autoSignIn: {
                        enabled: true,
                    }
                });
                history('/confirm');
                setError(false);
                console.log(user);
            } catch (error) {
                setError(true);
                console.log('error signing up:', error);
            }
        }
        else{
            setError(true);
        }
    }

    function validateInput(){
        if(username.length > 3
            && email.includes('@')
            && password.length >= 8
            && name.trim() != ''){
                return true;
            }
            else{
                return false;
            }

    };

    function listenToAutoSignInEvent() {
        Hub.listen('auth', ({ payload }) => {
            const { event } = payload;
            if (event === 'autoSignIn') {
                const user = payload.data;
                setLoggedIn(true);
                // assign user
            } else if (event === 'autoSignIn_failure') {
                history('/signin');
                setLoggedIn(false);
            }
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    return (

    <div className="SignUp">
        <h2 className="block text-gray-700 p-6 text-xl font-bold mb-2">Yay! Let's setup your account</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded max-w-md mx-auto border-2 border-indigo-800 items-center px-8 pt-6 pb-8 mb-4">
            
            <div className="mb-4">  
                <label className="block text-gray-700 text-m font-bold mb-2">Email* (must be valid)
                <input type="email" id="email" placeholder="Email" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setEmail(e.target.value)}></input>          
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-m font-bold mb-2">Username* (minimum 3 characters)
                <input type="text" id="username" placeholder="Username" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setUsername(e.target.value)}></input>          
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-m font-bold mb-2">Password* (minimum 8 characters)
                <input type="password" id="password" placeholder="Password" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setPassword(e.target.value)}></input>          
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-m font-bold mb-2">Name*
                <input type="text" id="name" placeholder="First Name" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setName(e.target.value)}></input>          
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-m font-bold mb-2">Account Type*
                
                <select className="block appearance-none w-full bg-white border border-indigo-800 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={e => setType(e.target.value)}>    
                    <option value="Customer">Customer</option>
                    <option value="Driver">Driver</option>
                </select>
                </label>
            </div>

            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"onClick={signUp}>Create Account</button>   
            <div className="mb-2 mt-3 text-red-400 font-semibold">
                {error ? <p>Error creating account. Ensure your credentials meet the requirements.</p> : null}
            </div>
            
        </form>


    </div>

    )};

export default SignUp;