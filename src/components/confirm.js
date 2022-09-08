import { Auth, Hub } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Confirm = ({ setLoggedIn }) => {

    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');
    const history = useNavigate();
    const [error, setError] = useState(false);

    async function resendCode() {
        try {
            await Auth.resendSignUp(username.trim());
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    async function confirmSignUp() {
        try {
          await Auth.confirmSignUp(username.trim(), code.trim());
          history('/');
          setError(false);
        } catch (error) {
            console.log('error confirming sign up', error);
            setError(true);
        }
    }

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

    <div className="Confirm">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded max-w-md mx-auto border-2 mt-16 border-indigo-800 items-center px-8 pt-6 pb-8 mb-4">
        <h2 className="block text-gray-700 text-xl font-bold p-3 mb-6">Activate Account</h2>
            {error ? <p>Error activating your account. Ensure your username and unique code are correct.</p> : null}
            <div className="mb-4">  
                <label className="block text-gray-700 text-m font-bold mb-2">Username
                <input type="text" id="username" placeholder="Username" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setUsername(e.target.value)}></input>          
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-m font-bold mb-2">One-Time Code (Sent via Email)
                <input type="text" id="code" placeholder="Code" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setCode(e.target.value)}></input>          
                </label>
            </div>
            <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-500 mr-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" onClick={confirmSignUp}>Activate Account</button> 
            <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" onClick={resendCode}>Resend Code</button>  
        </form>
    </div>
    )};

export default Confirm;