
import NonUserLanding from "./nonuserlanding";
import CustomerHome from "./customerhome";
import DriverHome from "./driverhome";
import Oops from "./oops";


const Home = ({ loggedIn, type, name, refresh}) => {


    return (
        <div className="Home mt-14">
            
                
        {loggedIn ? null : <NonUserLanding />}
        
        
        {loggedIn && type === "" || type === null ? <Oops refresh={refresh}/> : null}
        

        {loggedIn && type === "Customer" ? <CustomerHome /> : null}
        {loggedIn && type === "Driver" ? <DriverHome /> : null}


        </div>
    )};

export default Home;