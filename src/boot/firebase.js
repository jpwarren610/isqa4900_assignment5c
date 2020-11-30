import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyAIuRXQNhOGM4SMiY5LF4c2JXXEjbjkEcg",
  authDomain: "maverick-4e8e7.firebaseapp.com",
  databaseURL: "https://maverick-4e8e7.firebaseio.com",
  projectId: "maverick-4e8e7",
  storageBucket: "maverick-4e8e7.appspot.com",
  messagingSenderId: "957347244950",
  appId: "1:957347244950:web:e58b28097184d7fbb94bb7"
};

let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
