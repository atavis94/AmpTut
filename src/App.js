import React, { useState, useEffect } from 'react';
import './App.css';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  useNavigate
} from "react-router-dom";
import SignIn from './components/signin';
import SignUp from './components/signup';
import Home from './components/home';
import Confirm from './components/confirm';
import TopBar from './components/topbar';


function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const [type, setType] = useState('');
  const [name, setName] = useState('');
    
  const getDetails = async () => {

    try{
        const user = await Auth.currentUserInfo();
        const type = user.attributes['custom:type'];
        const name = user.attributes['custom:person']
        setType(type);
        setName(name);
    }catch(e){
        console.log('error fetching customer type', e);
    }

  };


  const checkLogggedIn = () =>{
    Auth.currentAuthenticatedUser()
      .then(sess => {
          console.log('logged in');
          setLoggedIn(true);
          getDetails();
      })
      .catch(() => {
          console.log('not logged in');

          setLoggedIn(false);
      })
};

  const signOut = async () => {
    try{
        await Auth.signOut();
        setLoggedIn(false);
    } catch(e){
        console.log('Error logging out', e);
    }
};

useEffect(() => {
    checkLogggedIn();
    getDetails();
}, []);


  return (
    <Router>
      <div className="App"> 
      <TopBar loggedIn={loggedIn} signOut={signOut}/>
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} signOut={signOut} type={type} name={name} getDetails={getDetails}/>} />
        <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} loggedIn={loggedIn} />} />  
        <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
        <Route path="/confirm" element={<Confirm setLoggedIn={setLoggedIn}/>} />
      </Routes>    
      </div>
    </Router>
  );
}

export default App;