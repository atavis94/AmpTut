import React, { useState, useEffect } from 'react';
import './App.css';
import { Auth } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import SignIn from './components/signin';
import SignUp from './components/signup';
import Home from './components/home';
import Confirm from './components/confirm';
import TopBar from './components/topbar';
import FourOhFour from './components/404';
import BottomBar from './components/bottombar';
import Account from './components/account';


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
      <TopBar loggedIn={loggedIn} signOut={signOut} name={name} type={type}/>
      <div className='min-h-screen max-h-screen'>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} type={type} name={name}/>} />
          <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} />} />  
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} />} />
          <Route path="/confirm" element={<Confirm setLoggedIn={setLoggedIn}/>} />
          <Route path="/account" element={<Account />}/>
          <Route path="*" element={<FourOhFour />} />
        </Routes>  
      </div>
      <BottomBar />
      </div>
    </Router>
  );
}

export default App;