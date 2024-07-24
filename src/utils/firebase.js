// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPtdmP3dMMZNoUW9ZPk5yTC2ho68MgRSs",
  authDomain: "foodgy-d8dff.firebaseapp.com",
  projectId: "foodgy-d8dff",
  storageBucket: "foodgy-d8dff.appspot.com",
  messagingSenderId: "585709105922",
  appId: "1:585709105922:web:4a41b747122fd9bd2d881b",
  measurementId: "G-TLX7W86QNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);