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
        setUserObj({
          displayName:authService.currentUser.displayName,
          uid:user.uid,
          updateProfile:(args)=>user.updateProfile(args)
        });
      }
      else{
        setIsLoggedIn(false);
      }
      setInit(true); 
    });
  },[]);
  const refreshUser = () =>{
    const user = authService.currentUser;
    setUserObj({
      displayName:authService.currentUser.displayName,
      uid:user.uid,
      updateProfile:(args)=>user.updateProfile(args)
    });
  }
  return (
    <>
  {init?<AppRouter refreshUser={refreshUser}isLoggedIn={isLoggedIn} userObj={userObj}/>:"Inittializing..."}
  <footer>&copy;Nwitter{new Date().getFullYear()}</footer>
  </>
  );
}

export default App;
