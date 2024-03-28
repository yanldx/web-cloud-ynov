// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCu8HVcelg1RGh2TbW1X49LVlmFZokownA",
    authDomain: "web-cloud-ynov-1a4ab.firebaseapp.com",
    projectId: "web-cloud-ynov-1a4ab",
    storageBucket: "web-cloud-ynov-1a4ab.appspot.com",
    messagingSenderId: "111597801318",
    appId: "1:111597801318:web:b6cafad8f77f1c44c442a7",
    measurementId: "G-RLKDQVZ82X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);