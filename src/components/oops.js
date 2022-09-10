
import { Link, useNavigate } from 'react-router-dom';

const Oops = () => {

const history = useNavigate();

const home = (e) =>{
    e.preventDefault();
    history('/');

};

    return (
        <div className="Oops mt-16">

          
            <h1 className="mb-6 font-bold block font-indigo-500 text-3xl">Loading... </h1>
            <h1 className="mb-6 font-bold block font-indigo-500 text-3xl">Taking too long? Try reloading. </h1>
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold mx-2 py-2 px-4 rounded-full" styles="background: url('../img/acc.sv') top-left" onClick={home}>Reload</button>



            
        </div>
    )};

export default Oops;