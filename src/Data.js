// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOASWauhye3xLUAULZXMAc4VU496cjPFE",
  authDomain: "react-todo-7cb46.firebaseapp.com",
  projectId: "react-todo-7cb46",
  storageBucket: "react-todo-7cb46.appspot.com",
  messagingSenderId: "952582065241",
  appId: "1:952582065241:web:ccac19f03260447672f548",
  measurementId: "G-QZVP66WKL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const DB = getAnalytics(app);
export { DB };