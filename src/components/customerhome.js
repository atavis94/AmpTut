import { Auth } from "aws-amplify";
import { useState } from "react";
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
  import CustomerHomeDefault from "./customerhomedef";
  import CustomerHomeMock from "./customerhomemock";

const CustomerHome = () => {
    const [interaction, setInteraction] = useState(false);

    return (
        <div className="CustomerHome">
            
            {interaction ? <CustomerHomeMock setInteraction={setInteraction}/> : <CustomerHomeDefault setInteraction={setInteraction}/>}
             
        </div>
    )};

export default CustomerHome;