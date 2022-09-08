import { Auth } from "aws-amplify";
import { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
    useNavigate,
    useLocation
  } from "react-router-dom";


const Account = () => {


    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    return (
        <div className="Account">

        {// password
        // account delete
        }
        <h2 className="block text-gray-700 text-xl font-bold mb-2">Activate Account</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            
            <div className="mb-4">  
                <label className="block text-gray-700 text-m font-bold mb-2">Username
                <input type="text" id="username" placeholder="Username" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>          
                </label>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-m font-bold mb-2">One-Time Code (Sent via Email)
                <input type="text" id="code" placeholder="Code" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>          
                </label>
            </div>
            <button className="shadow bg-purple-500 hover:bg-purple-400 mr-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full" >Activate Account</button> 
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full" >Resend Code</button>  
        </form>




            
        </div>
    )};

export default Account;