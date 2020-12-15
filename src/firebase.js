// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";





const firebaseApp = firebase.initializeApp({

  apiKey: "AIzaSyDEEtUD4xkM9l08lBHzUsk6nXYCKQboNM8",
  authDomain: "instagram-clone-e8ec6.firebaseapp.com",
  databaseURL: "https://instagram-clone-e8ec6-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-e8ec6",
  storageBucket: "instagram-clone-e8ec6.appspot.com",
  messagingSenderId: "802257821310",
  appId: "1:802257821310:web:c9b4d097678720e2f5022f",
  measurementId: "G-LC6YGVX6CW"


});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export {db, auth, storage};



