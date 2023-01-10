import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAp8KxjNyqDxYo_-2tCXyPAFDsaf48WAVY",
    authDomain: "fir-a-8c6d8.firebaseapp.com",
    projectId: "fir-a-8c6d8",
    storageBucket: "fir-a-8c6d8.appspot.com",
    messagingSenderId: "248217571123",
    appId: "1:248217571123:web:dd7c4ddad1e540b9b9b846",
    measurementId: "G-F0VC2DHDK2"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider =new firebase.auth.GoogleAuthProvider();

export { auth,provider, db };
