import React, { useState, useEffect } from 'react';
import './App.css';
import { Auth, Hub } from 'aws-amplify'
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

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  // Attempt at fixing a strange bug where AWS does not return auth data.
  // Could not explicitly timeout promise function.
  function  getDetailsFix(){
    getDetails();
  }


  const checkLogggedIn = async () =>{
    Auth.currentAuthenticatedUser()
      .then(sess => {
          console.log('logged in');
          setLoggedIn(true);
          setTimeout(2500);
          getDetails(); 
      })
      .catch(() => {
          console.log('not logged in');

          setLoggedIn(false);
        
      })
  };

  // You'll find this everywhere. AWS documentation has no actual explanation of how it works.
  // Seems to work ... most ... of the time.
  function listenToAutoSignInEvent() {
    Hub.listen('auth', ({ payload }) => {
        const { event } = payload;
        if (event === 'autoSignIn') {
            const user = payload.data;
            setLoggedIn(true);
            // assign user
        } else if (event === 'autoSignIn_failure') {
            setLoggedIn(false);
        }
    })
  };

  useEffect(() => {
      listenToAutoSignInEvent();
      checkLogggedIn();
      setTimeout(getDetailsFix(), 4000);
      getDetails(); 
  }, []);


  return (
    <Router>
      <div className="App">     
      <TopBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} name={name} type={type}/>
      <div className='min-h-screen max-h-screen'>
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn} type={type} name={name}/>} />
          <Route path="/signin" element={<SignIn setLoggedIn={setLoggedIn} password={password} username={username} setPassword={setPassword} setUsername={setUsername} />} />  
          <Route path="/signup" element={<SignUp setLoggedIn={setLoggedIn} password={password} username={username} setPassword={setPassword} setUsername={setUsername}/>} />
          <Route path="/confirm" element={<Confirm setLoggedIn={setLoggedIn} loggedIn={loggedIn} password={password} username={username} setUsername={setUsername}/>} />
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