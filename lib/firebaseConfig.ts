// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAX2WXdb1Qlz85yrOnpb3kGa8xl76uwF6U",
    authDomain: "twitter-clone-bf0e5.firebaseapp.com",
    projectId: "twitter-clone-bf0e5",
    storageBucket: "twitter-clone-bf0e5.appspot.com",
    messagingSenderId: "576171809958",
    measurementId: "1:576171809958:web:aeda12fcc2c91a2c6aa867",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




// export { auth }