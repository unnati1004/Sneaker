// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCM0eDFwsp6oR1OWBX6y2KdcAcM4N63Z4",
  authDomain: "sneaker-88976.firebaseapp.com",
  databaseURL: "http://sneaker-88976.firebaseio.com",
  projectId: "sneaker-88976",
  storageBucket: "sneaker-88976.appspot.com",
  messagingSenderId: "866939425319",
  appId: "1:866939425319:web:169d98a15bb1016be3f402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};
