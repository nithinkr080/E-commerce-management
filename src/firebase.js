import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyButoF0JzYiZyFKLGKdJuF5EE2Z0ZiPnsU",
  authDomain: "challenge-cd7c9.firebaseapp.com",
  projectId: "challenge-cd7c9",
  storageBucket: "challenge-cd7c9.appspot.com",
  messagingSenderId: "813416292492",
  appId: "1:813416292492:web:183742fbd0abfb86309ba9",
  measurementId: "G-XV02VTR40S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };