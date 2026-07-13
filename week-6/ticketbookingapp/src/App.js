import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function LoginButton(props){
  return(
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props){
  return(
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

function GuestGreeting() {
  return (
    <div>
      <h1>Please sign up.</h1>

      

    </div>
  );
}



function UserGreeting() {
  return (
    <div>
      <h1>Welcome back!</h1>

    </div>
  );
}


function Greetings(props){
  if(props.isLoggedIn){
    return <UserGreeting/>
  }
  return <GuestGreeting/>

}




function App() {
  const [isLoggedIn,setIsLoggedIn]= useState(false);

  function login(){
    setIsLoggedIn(true);
  }
  function logout(){
    setIsLoggedIn(false);
  }


  return (
       <div style={{ margin: "30px" }}>
        <Greetings isLoggedIn={isLoggedIn}></Greetings>
        <br/>
        {
          isLoggedIn ? <LogoutButton onClick={logout}/>:<LoginButton onClick={login}/>
        }

       </div>


  );
}

export default App;
