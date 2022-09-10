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

const DriverHome = ({ setInteraction }) => {

    const handleSubmit = (e) =>{
        setInteraction(true);
        e.preventDefault();
    };

    return (
        <div className="DriverHome">
            <div className="bg-white pt-6 max-w-5xl rounded mx-auto border-2 mt-16 border-indigo-800">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-center lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Thanks for joining NUBER.</span>
                    <span className="block text-purple-700">The best taxi service out there.</span>
                    </h2>
                </div>
            </div>
            <div className="bg-white pt-6 max-w-5xl rounded mx-auto border-2 mt-2 border-indigo-800">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-center lg:py-16 lg:px-8">
                    <h2 className="text-lg font-bold tracking-tight text-gray-900">
                    <span className="block">Before you can accept customers, we some more information from you.</span>
                    <span className="block text-purple-700">Please upload your proof of ID photo below.</span>
                    </h2>
                </div>
            </div>
        </div>
            



    )};

export default DriverHome;