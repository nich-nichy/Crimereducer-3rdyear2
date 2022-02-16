import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-dhXarDjn2KBZPhvCV_TrySbuYeoYBwM",
    authDomain: "crime-reducer.firebaseapp.com",
    projectId: "crime-reducer",
    storageBucket: "crime-reducer.appspot.com",
    messagingSenderId: "474145114104",
    appId: "1:474145114104:web:6ddb14c56fa2b6937db80d",
    measurementId: "G-79NGVSS43Q"
  };

firebase.initializeApp(firebaseConfig);

 
  
  export default firebase;