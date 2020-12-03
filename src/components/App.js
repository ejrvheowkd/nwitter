import React, { useState } from "react";
import AppRouter from "./Router";
import {aushService} from "fBase";
import { authService } from "../fBase";

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
  <AppRouter isLoggedIn={isLoggedIn}/>
  <footer>&copy;Nwitter{new Date().getFullYear()}</footer>
  </>
  );
}

export default App;
