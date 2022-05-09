import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// const APIKEY = process.env.API_KEY;

const firebaseConfig = {
  apiKey: "AIzaSyBu-2sOFVZsJAZmHLAbqQM7DuiBv8tVI30",
  authDomain: "neogpool.firebaseapp.com",
  projectId: "neogpool",
  storageBucket: "neogpool.appspot.com",
  messagingSenderId: "180445717173",
  appId: "1:180445717173:web:e67252e9856353673414fc",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

// firebase.firestore().enablePersistence()
const auth = firebase.auth();

export { firebase, db, auth };
