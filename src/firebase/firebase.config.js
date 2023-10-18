import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX_JIyepG3_koEYPDFA0XJEjlDte-BPng",
  authDomain: "automotive-shop-website.firebaseapp.com",
  projectId: "automotive-shop-website",
  storageBucket: "automotive-shop-website.appspot.com",
  messagingSenderId: "34306444517",
  appId: "1:34306444517:web:d2b01d3b139cd9a554580c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
