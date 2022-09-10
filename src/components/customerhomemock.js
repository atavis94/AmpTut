
import placeholder from '../img/placeholder2.png';

const CustomerHomeMock = ({ setInteraction }) => {

    const handleSubmit = (e) =>{
        setInteraction(false);
        e.preventDefault();
    };

    return (
        <div className="CustomerHomeMock">

            <div className="flex place-content-center gap-2 ml-4 mr-4">
                <div className="bg-white shadow-md max-w-md rounded
                mx-auto border-2 mt-16 border-indigo-800 items-center p-14 m-8 mb-4 ">

                    <h2 className="block text-gray-700 text-xl font-bold mb-8">Hold on! Your Nuber is on the way!</h2>
                


                    
                    <span className="mb-6 block text-m font-semibold">Your Nuber is 600 metres away.</span>
                    <span className="mb-6 block text-m font-semibold">Estimated wait: 2 Minutes</span>
                    <span className="mb-1 block text-m font-semibold">Your Nuber's name is Daniel Ricardo.</span>
                    <span className="mb-8 block text-m font-semibold">Daniel is driving a Porsche 918 Spyder [2G00D4U]</span>
                    <button className="shadow bg-purple-600 hover:bg-purple-500 mr-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded-full" onClick={handleSubmit}>Cancel Nuber</button>


                </div>

                <div className="bg-transparent rounded  isolate
                mx-auto  mt-16  items-center mb-4">
                    <img src={placeholder} className="mx-auto shadow-md flex-auto border-2 rounded border-indigo-800 "/>
                </div>
           
            

                </div>

        </div>
    )};

export default CustomerHomeMock;