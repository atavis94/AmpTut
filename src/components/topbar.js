
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

const TopBar = ({ loggedIn, signOut}) => {
    const loc = useLocation();
    const hide = ["/signin", "/confirm", "signup"];
    {console.log(loc)}

    return (
        <div className="TopBar">
            <div className="p-3 max-w-full mx-auto bg-white rounded-sm border-indigo-800 border-b shadow-md flex items-center space-x-0">
                <h1 className="mx-auto block font-bold text-3xl">Nuber</h1>

                {hide.includes(loc.pathname) ? null :
                 loggedIn ?
                <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"onClick={signOut}>Sign Out</button> 
                : (<Link to="/signin"> <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full">Sign In</button> </Link>)}
            
            </div>


        </div>
    )};

export default TopBar;