
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
import acc from "../img/acc.svg";

const TopBar = ({ loggedIn, signOut, name, type}) => {
    const loc = useLocation();
    const hide = ["/signin", "/confirm"];
    const history = useNavigate();

    const home = (e) =>{
        e.preventDefault();
        history('/account');
    
    };

    return (
        <div className="TopBar">
            <div className="p-3 max-w-full mx-auto bg-white rounded-sm border-indigo-800 border-b shadow-md justify-between flex items-center gap-2 space-x-0">
                <h1 className=" indent-6 mx-2 block text-violet-700 drop-shadow-2xl hover:text-4xl font-bold subpixel-antialiased text-3xl">NUBER</h1>
                <div className="gap 2">

                    {hide.includes(loc.pathname) ? null :
                    loggedIn ?
                     <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full"onClick={signOut}>Sign Out</button> 
                    : (<Link to="/signin"> <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full">Sign In</button> </Link>)}
                
                    { loggedIn? (<Link to="/account"><button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold mx-2 py-2 px-4 rounded-full" styles="background: url('../img/acc.sv') top-left" onClick={signOut}>{name}</button> </Link>) : null}
                </div>
            </div>


        </div>
    )};

export default TopBar;