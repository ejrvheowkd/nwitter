import firebase from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
    appId: process.env.REACT_APP_APP_ID
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

  /*   authDomain: "nwitter-ddc3d.firebaseapp.com",
    projectId: "nwitter-ddc3d",
    storageBucket: "nwitter-ddc3d.appspot.com",
    messagingSenderId: "514064095582",
    appId: "1:514064095582:web:4cffe58f114647ce60d7cf"*/