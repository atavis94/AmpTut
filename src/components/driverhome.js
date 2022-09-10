import { Auth, API, Storage } from "aws-amplify";
import { listID } from '../graphql/queries';
import { createID} from '../graphql/mutations';
import { useState, useEffect } from "react";
import { listUserIDS } from "../graphql/queries";
import { createUserID, deleteUserID} from "../graphql/mutations";

const initialFormState = { username: ''}

const DriverHome = () => {

    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState(initialFormState);
    
    const [success, setSuccess] = useState(false)

    const getUsername = async () => {

        try{
            const user = await Auth.currentUserInfo();
            const username = user.username;

            setFormData({...formData, 'username': username});
  
        }catch(e){
            console.log('error fetching customer type', e);
        }
    
      };

    useEffect(() => {
        getUsername();
        fetchIDs();      
    }, []);

    async function onChange(e) {
        if (!e.target.files[0]) return
          const file = e.target.files[0];
          setFormData({ ...formData, image: file.name });
          await Storage.put(file.name, file);
          fetchIDs();
      }

    const handleSubmit = (e) =>{
    
        e.preventDefault();
    };

    // I cannot seem to get ownership permissions to work correctly.
    // My understanding is that the username, according to my schema, should specify the owner.
    // Instead it is defaulting to my AWS account name. Thus I can't seem to fetch images.
    async function fetchIDs() {
        const apiData = await API.graphql({ query: listUserIDS });
        const imagesFromAPI = apiData.data.listUserIDS.items;
        await Promise.all(imagesFromAPI.map(async ID => {
          if (ID.image) {
            const image = await Storage.get(ID.image);
            ID.image = image;
          }
          return ID;
        }))
        setImages(apiData.data.listUserIDS.items);
    }
  
      async function createID() {
        console.log(formData);
        if (!formData.username) return;
        setSuccess(true);
        await API.graphql({ query: createUserID, variables: { input: formData } });
        if (formData.image) {
          const image = await Storage.get(formData.image);
          formData.image = image;
        }
        setImages([ ...images, formData ]);
        setFormData(initialFormState);
      }
  
    async function deleteImage({ id }) {
      const newImagesArray = images.filter(ID => ID.id !== id);
      setImages(newImagesArray);
      await API.graphql({ query: deleteUserID, variables: { input: { id } }});
    }

    // I found the GraphQL part reasonably difficult initially.
    // Thus I largely copy/pasted code from the tutorial provided in week 6.
    // Just in case you're wondering why my form methodology differs from my other components.
    return (
        <div className="DriverHome">
            <div className="bg-white pt-6 max-w-5xl rounded mx-auto border-2 mt-16 border-indigo-800">
                <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-center lg:py-16 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Thanks for joining NUBER.</span>
                    <span className="block text-purple-700">The best taxi service out there.</span>
                    </h2>
                </div>
            </div>

            <div className="bg-white max-w-5xl rounded mx-auto border-2 mt-2 border-indigo-800 px-8 pt-6 pb-8 mb-4">


                <div className="divide-y divide-indigo-700">  
                    <div className="mb-2">
                        <h2 className="text-lg font-bold tracking-tight text-gray-900">
                        <span className="block">Before you can accept customers, we some more information from you.</span>
                        <span className="block text-purple-700">Please upload your proof of ID photo below.</span>
                        </h2>
                    </div>

                        <div className="mb-6">
                        <form onSubmit={handleSubmit} className="bg-white rounded max-w-xl mx-auto ">

                            <div>
                                <p className="block text-gray-700 text-lg font-bold p-3 mb-6">Upload Identification</p>                                               
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-m font-bold mb-2">
                                        <input type="file" onChange={onChange} id="idfile" placeholder="Identification" className="shadow appearance-none border border-indigo-800 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>          
                                    </label>
                                </div>
                        
                                <button className="rounded-full shadow-lg bg-purple-600 mb-3 hover:bg-purple-500 mr-2 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" onClick={createID} >Upload ID</button> 
                                {success? <span className="block text-purple-700">Successfully uploaded!</span> : null}
                            </div>

                        </form>

                        </div>
                        <div className="mb-6 justify-center  items-center">
                               
                                {images.map(image => (
                                    <div key={image.id || image.username} className="justify-center mx-auto items-center w-64">                                   
                                    
                                        <img className="justify-center items-center mt-4 mb-2" src={image.image}  />
                                    			
                                        <button className="rounded-full shadow-lg bg-red-600 hover:bg-red-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4" onClick={() => deleteImage(image)}>Delete</button>
                                    </div>
                                ))}
                                
                       </div>
                    


                    
                </div>
            </div>
        </div>
            



    )};

export default DriverHome;