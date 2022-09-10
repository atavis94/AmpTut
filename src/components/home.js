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

import NonUserLanding from "./nonuserlanding";
import CustomerHome from "./customerhome";
import DriverHome from "./driverhome";
import Oops from "./oops";


const Home = ({ loggedIn, type, name}) => {


    return (
        <div className="Home mt-14">
            
                
        {loggedIn ? null : <NonUserLanding />}
        
        
        {loggedIn && type === "" || type === null ? <Oops /> : null}
        

        {loggedIn && type === "Customer" ? <CustomerHome /> : null}
        {loggedIn && type === "Driver" ? <DriverHome /> : null}


        </div>
    )};

export default Home;