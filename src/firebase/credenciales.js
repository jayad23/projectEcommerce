 import { initializeApp } from "firebase/app";

 const firebaseConfig = {
   apiKey: "AIzaSyB5rD1WI3rewlsRnvgGrLVpfz04zFbHH-w",
   authDomain: "e-comerce-1e392.firebaseapp.com",
   projectId: "e-comerce-1e392",
   storageBucket: "e-comerce-1e392.appspot.com",
   messagingSenderId: "1045079785878",
   appId: "1:1045079785878:web:26046e6c01417ccf885db7"
 };
 
 // Initialize Firebase
 const firebaseApp = initializeApp(firebaseConfig);
 
 export default firebaseApp