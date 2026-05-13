// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3Wd9i4RCax2Lr4oTTFS0ckrFweXEZoas",
  authDomain: "mindfulmoods-5203c.firebaseapp.com",
  projectId: "mindfulmoods-5203c",
  storageBucket: "mindfulmoods-5203c.firebasestorage.app",
  messagingSenderId: "957114483433",
  appId: "1:957114483433:web:4cb1499eaf44cfefeda678",
  measurementId: "G-788JCPY2D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);