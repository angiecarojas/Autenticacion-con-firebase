import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADCY18VVWPRPFr9mG0tpqJ-vtO2ys4gkY",
  authDomain: "softseguro-b1b10.firebaseapp.com",
  projectId: "softseguro-b1b10",
  storageBucket: "softseguro-b1b10.appspot.com",
  messagingSenderId: "814962179424",
  appId: "1:814962179424:web:7c02abf90adaf54344b205",
  measurementId: "G-NVEQ161H0B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };

