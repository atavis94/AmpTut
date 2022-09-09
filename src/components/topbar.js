
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

const TopBar = ({ loggedIn, setLoggedIn, name, type}) => {
    const loc = useLocation();
    const hide = ["/signin", "/confirm"];
    const history = useNavigate();

    const home = (e) =>{
        e.preventDefault();
        history('/');
    
    };



    const signOut = async () => {
        try{
            await Auth.signOut();
            setLoggedIn(false);
            history('/');
        } catch(e){
            console.log('Error logging out', e);
        }
    };

    return (
        <div className="TopBar">
            <div className="p-2 z-40 fixed top-0 inset-x-0 bg-white rounded-sm border-indigo-800 border-b shadow-md justify-between flex items-center gap-2 space-x-0">
                <h1 className=" indent-6 mx-2 block text-purple-700 drop-shadow-2xl hover:text-4xl font-bold subpixel-antialiased text-3xl" onClick={home}>NUBER</h1>
                <div className="gap 2">

                    {hide.includes(loc.pathname) ? null :
                    loggedIn ?
                     <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4"onClick={signOut}>Sign Out</button> 
                    : (<Link to="/signin"> <button className="rounded-full shadow-lg bg-purple-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4">Sign In</button> </Link>)}
                
                    { loggedIn? (<Link to="/account"><button className="bg-purple-600 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold mx-2 py-2 px-4 rounded-full shadow-md" styles="background: url('../img/acc.sv') top-left">{name}</button> </Link>) : null}
                </div>
            </div>


        </div>
    )};

export default TopBar;