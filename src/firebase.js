// src/firebase.js
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDFKzbD97feV8_N003yDu-c_IJ9CLpqW7k",
  authDomain: "bca-app-1bcb8.firebaseapp.com",
  projectId: "bca-app-1bcb8",
  storageBucket: "bca-app-1bcb8.appspot.com",
  messagingSenderId: "125222441237",
  appId: "1:125222441237:web:a7c46332970796cbbc191c"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;