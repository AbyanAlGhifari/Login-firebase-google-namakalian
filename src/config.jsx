// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyATmOMNaNxIHu5aUFcLSTbrQq2CQmVN73M",
    authDomain: "login-namakalian.firebaseapp.com",
    projectId: "login-namakalian",
    storageBucket: "login-namakalian.appspot.com",
    messagingSenderId: "342866290780",
    appId: "1:342866290780:web:ad072fa451ab43c6365e99",
    measurementId: "G-72D70WZBR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth
