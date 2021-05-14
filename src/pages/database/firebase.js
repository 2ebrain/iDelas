import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBg4Bd0R0k-gwXpJptZU_k5vWQdEqvo6DY",
    authDomain: "idelas.firebaseapp.com",
    projectId: "idelas",
    storageBucket: "idelas.appspot.com",
    messagingSenderId: "365031203178",
    appId: "1:365031203178:web:566671b928fec53d050513",
    measurementId: "G-5T4ECBTR5K"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
    
 }

  export const db = firebase.database();
  export default firebase;