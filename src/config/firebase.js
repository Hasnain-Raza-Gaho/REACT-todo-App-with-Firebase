import  firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyDdlBR2ETxQCFPu6fllXhK18K7y9RoRJJ8",
    authDomain: "fir-practice-451ef.firebaseapp.com",
    databaseURL: "https://fir-practice-451ef-default-rtdb.firebaseio.com",
    projectId: "fir-practice-451ef",
    storageBucket: "fir-practice-451ef.appspot.com",
    messagingSenderId: "189683177155",
    appId: "1:189683177155:web:8e862b2de75f12c2857476"
  };

  console.log(firebase.database)

firebase.initializeApp(firebaseConfig);

  export { firebase as default } 
