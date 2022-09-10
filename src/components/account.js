
import { Auth } from "aws-amplify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Account = ({ signOut }) => {

    const [success, setSuccess] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const history = useNavigate();


    async function deleteUser() {
        try {
          const result = await Auth.deleteUser();
          console.log(result);
          signOut();
          history('/')
        } catch (error) {
          console.log('Error deleting user', error);
        }
      }

    const changePwd = () =>{
        Auth.currentAuthenticatedUser()
        .then(user => {
            setSuccess(true);
            return Auth.changePassword(user, oldPassword, newPassword);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err), setSuccess(false));

    };

    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    return (
        <div className="Account mt-16">
            <div className="bg-white mt-16 shadow-md rounded max-w-xl mx-auto border-2 border-indigo-800 items-center px-8 pt-6 pb-8 mb-4">
                <div className="divide-y divide-indigo-700">  
                    <h2 className="block text-gray-700 text-xl font-bold p-3 mb-6">Account Settings</h2>
                        <form onSubmit={handleSubmit} className="bg-white rounded max-w-xl mx-auto ">

                        <div>
                            <p className="block text-gray-700 text-lg font-bold p-3 mb-6">Change Password</p>                                               
                            <div className="mb-6">  
                                <label className="block text-gray-700 text-m font-bold mb-2">Old Password
                                <input type="password" id="OPassword" placeholder="Old Password" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setOldPassword(e.target.value)}></input>          
                                </label>
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-m font-bold mb-2">New Password (minimum 8 characters)
                                <input type="password" id="NPassword" placeholder="New Password" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setNewPassword(e.target.value)}></input>          
                                </label>
                            </div>
                            { success ? <span className="block text-gray-700 text-sm font-bold p-3 mb-6">Success!</span> : null }
                            <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-500 mr-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" onClick={changePwd} >Change Password</button> 

                        </div>

                        </form>
                    
                    <div className="mt-16">
                        <p className="block text-gray-700 text-lg font-bold p-3 mb-6">Delete Account</p>
                        <p className="block text-gray-700 text-sm font-bold p-3 mb-6">Warning, this WILL delete your account immediately and permanently!</p>
                        <button className="rounded-full shadow-lg bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" onClick={deleteUser}>Delete Account</button>  

                    </div>
                </div>
            </div>
        </div>
    )};

export default Account;