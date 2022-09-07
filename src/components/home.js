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

const Home = ({ loggedIn, signOut, type, name }) => {


    return (
        <div className="Home">
            
                <h1 className="mx-auto block font-bold text-3xl">{type}</h1>

        
        {type === "Customer" ? <h2>Customer</h2> : null}

        {type === "Driver" ? <h2>Driver</h2> : null}

        {type === "" || type === null ? <h2>Please review your account settings.</h2> : null}


        </div>
    )};

export default Home;