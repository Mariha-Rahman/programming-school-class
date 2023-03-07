// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSACXF7FzhumUW8UJME9-aTJe9qWuQ8AU",
    authDomain: "programming-school-auth.firebaseapp.com",
    projectId: "programming-school-auth",
    storageBucket: "programming-school-auth.appspot.com",
    messagingSenderId: "114835796172",
    appId: "1:114835796172:web:59850e76dbf4f5ce729269",
    measurementId: "G-C00J24W1QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;