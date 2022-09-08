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


const Home = ({ loggedIn, type, name}) => {


    return (
        <div className="Home">
            
                
        {loggedIn ? null : <NonUserLanding />}
        
        
        {loggedIn && type === "" || type === null ? <h2>Loading...</h2> : null}
        

        {loggedIn && type === "Customer" ? <CustomerHome /> : null}


        </div>
    )};

export default Home;