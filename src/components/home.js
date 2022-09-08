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

  import CustomerHome from "./customerhome";


const Home = ({ loggedIn, signOut, type, name, getDetails}) => {


    return (
        <div className="Home">
            
                

        
        
        {type === "" || type === null ? <h2>Loading...</h2> : null}
        

        {type === "Customer" ? <CustomerHome /> : null}


        </div>
    )};

export default Home;