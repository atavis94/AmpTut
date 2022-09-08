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

const CustomerHomeDefault = ({ setInteraction }) => {

    const handleSubmit = (e) =>{
        setInteraction(true);
        e.preventDefault();
    };

    return (
        <div className="CustomerHomeDefault">

            <div className="flex place-content-center gap-2 ml-4 mr-4">
                <div className="bg-white shadow-md max-w-md rounded border-2 border-indigo-800
                mx-auto  mt-16  items-center p-14 m-8 mb-4 ">

                    <h2 className="block text-gray-700 text-xl font-bold mb-8">Vroom Vroom! Locate Nuber </h2>
                    <form onSubmit={handleSubmit}>

                    <div className="mb-4">  
                        <label className="block text-gray-700 text-m font-bold mb-2">Current Location
                        <input type="text" id="username" readOnly placeholder="Username" value="123 Notta Road, Deimos, Mars" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>          
                        </label>
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-m font-bold mb-2">Destination
                        <input type="text" id="code" readOnly placeholder="Code" value="321 Facade Ave, Fiction, Earth" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" ></input>          
                        </label>
                    </div>
                    <span className="mb-6 block text-m font-semibold">Nubers in your area: 11</span>
                    <span className="mb-6 block text-m font-semibold">Estimated wait: 3 Minutes</span>
                    <button className="shadow bg-purple-500 hover:bg-purple-400 mr-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"  onClick={handleSubmit}>Find Nuber</button>                    
                    </form>


                </div>

                <div className="bg-transparent rounded  isolate
                mx-auto  mt-16  items-center mb-4">
                    <img src={placeholder} className="mx-auto shadow-md flex-auto border-2 rounded border-indigo-800 "/>
                </div>
            </div>
        </div>
            



    )};

export default CustomerHomeDefault;