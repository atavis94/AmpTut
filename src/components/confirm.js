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
            await Auth.resendSignUp(username);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    async function confirmSignUp() {
        try {
          await Auth.confirmSignUp(username, code);
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
        <h2 className="block text-gray-700 text-xl font-bold mb-2">Activate Account</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {error ? <p>Error activating your account. Ensure your username and unique code are correct.</p> : null}
            <div className="mb-4">  
                <label className="block text-gray-700 text-m font-bold mb-2">Username
                <input type="text" id="username" placeholder="Username" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setUsername(e.target.value)}></input>          
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-m font-bold mb-2">One-Time Code (Sent via Email)
                <input type="text" id="code" placeholder="Code" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setCode(e.target.value)}></input>          
                </label>
            </div>
            <button className="shadow bg-purple-500 hover:bg-purple-400 mr-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"onClick={confirmSignUp}>Activate Account</button> 
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"onClick={resendCode}>Resend Code</button>  
        </form>
    </div>
    )};

export default Confirm;