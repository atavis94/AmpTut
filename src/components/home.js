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

const Home = ({ loggedIn, signOut, type, name, getDetails}) => {


    return (
        <div className="Home">
            
                



        {type === "" || type === null ? <h2>Loading...</h2> : <h1 className="mx-auto block font-bold text-3xl">{type}</h1> }


        </div>
    )};

export default Home;