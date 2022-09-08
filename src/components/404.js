
import { Link, useNavigate } from 'react-router-dom';

const FourOhFour = () => {

const history = useNavigate();

const home = (e) =>{
    e.preventDefault();
    history('/');

};

    return (
        <div className="FourOhFour mt-8">

          
            <h1 className="mb-6 font-bold block font-indigo-500 font-4xl">404 - Page Not Found... </h1>
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold mx-2 py-2 px-4 rounded-full" styles="background: url('../img/acc.sv') top-left" onClick={home}>Home</button>



            
        </div>
    )};

export default FourOhFour;