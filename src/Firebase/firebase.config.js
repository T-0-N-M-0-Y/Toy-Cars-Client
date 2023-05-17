// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDxRlx6DUaB8snjKgVZUflsXkk5azyMv0U",
    authDomain: "assingment-11-toy-cars.firebaseapp.com",
    projectId: "assingment-11-toy-cars",
    storageBucket: "assingment-11-toy-cars.appspot.com",
    messagingSenderId: "571077928863",
    appId: "1:571077928863:web:c525270fd36cc51ad8bfaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;