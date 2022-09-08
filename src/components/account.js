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

        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded max-w-xl mx-auto border-2 mt-16 border-indigo-800 items-center px-8 pt-6 pb-8 mb-4">
        <div class="divide-y divide-indigo-700">

        <h2 className="block text-gray-700 text-xl font-bold p-3 mb-6">Account Settings</h2>

            <div>
                <p className="block text-gray-700 text-lg font-bold p-3 mb-6">Change Password</p>
               
            
                <div className="mb-4">  
                    <label className="block text-gray-700 text-m font-bold mb-2">Old Password
                    <input type="text" id="OPassword" placeholder="Old Password" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>          
                    </label>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-m font-bold mb-2">New Password
                    <input type="text" id="NPassword" placeholder="New Password" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>          
                    </label>
                </div>
                <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-500 mr-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" >Activate Account</button> 
                <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" >Resend Code</button>  

            </div>
            <div className="mt-16">
            <p className="block text-gray-700 text-lg font-bold p-3 mb-6">Delete Account</p>
            <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" >Delete Account</button>  

            </div>

        </div>
            
        </form>




            
        </div>
    )};

export default Account;