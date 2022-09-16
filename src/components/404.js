
import { useNavigate } from 'react-router-dom';

const FourOhFour = ({ refresh }) => {

const history = useNavigate();

const home = (e) =>{
    e.preventDefault();
    refresh();
    history('/');

};

    return (
        <div className="FourOhFour mt-16">

          
            <h1 className="mb-6 mt-16 font-bold block font-indigo-500 text-3xl">404 - Page Not Found... </h1>
            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold mx-2 py-2 px-4 rounded-full" styles="background: url('../img/acc.sv') top-left" onClick={home}>Home</button>



            
        </div>
    )};

export default FourOhFour;