
{
//   <script type="module">
//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  
//   import firebase from 'firebase'
//   require('firebase/auth')

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
// </script> 
}

let firebaseConfig = {
    apiKey: "AIzaSyBPrhEzLOLVnNm1jrbMu7VOpGcKJQnLvgA",
    authDomain: "what-i-feel-d9756.firebaseapp.com",
    projectId: "what-i-feel-d9756",
    storageBucket: "what-i-feel-d9756.appspot.com",
    messagingSenderId: "269113785449",
    appId: "1:269113785449:web:cc0868943bfb9ae62ef6f8"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let auth = firebase.auth();

const logoutUser = () => {
  auth.signOut();
  location.reload();
}
