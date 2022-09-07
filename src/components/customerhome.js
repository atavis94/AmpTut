import { Auth } from "aws-amplify";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
    Link,
    useNavigate,
    useLocation
  } from "react-router-dom";
  import placeholder from '../img/mapimgplaceholder.jpg';

const CustomerHome = () => {


    return (
        <div className="CustomerHome">

            <div className="flex place-content-center gap-2 m-4">
                <div className="bg-white shadow-md max-w-md rounded 
                mx-auto border-2 mt-16 border-indigo-800 items-center p-14 m-8 mb-4 ">
                    <h2 className="block text-gray-700 text-xl font-bold mb-2">Activate Account</h2>
                    <form>

                    <div className="mb-4">  
                        <label className="block text-gray-700 text-m font-bold mb-2">Username
                        <input type="text" id="username" placeholder="Username" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>          
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-m font-bold mb-2">One-Time Code (Sent via Email)
                        <input type="text" id="code" placeholder="Code" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>          
                        </label>
                    </div>
                    <button className="shadow bg-purple-500 hover:bg-purple-400 mr-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full">Find Nuber</button> 
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full">Cancel Ride</button>  
                    </form>


            </div>

                <div className="bg-white shadow-md  rounded  isolate
                mx-auto border-2 mt-16 border-indigo-800 items-center mb-4">
                    <img src={placeholder} className="mx-auto flex-auto "/>
                </div>
            </div>
            



        </div>
    )};

export default CustomerHome;