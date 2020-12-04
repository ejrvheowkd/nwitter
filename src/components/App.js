import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import {aushService} from "fBase";
import { authService } from "../fBase";

function App() {
  const [init,setInit] = useState(false);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [userObj,setUserObj] = useState(null);
  useEffect(()=>{
    //변화가 있는지 듣는 구간
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggedIn(true);
        setUserObj(user);
      }
      else{
        setIsLoggedIn(false);
      }
      setInit(true); 
    });
  },[]);
  return (
    <>
  {init?<AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/>:"Inittializing..."}
  <footer>&copy;Nwitter{new Date().getFullYear()}</footer>
  </>
  );
}

export default App;
