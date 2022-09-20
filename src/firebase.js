import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCexyTyRzOXl81L-sUc_PImkXYnMMS8tuc",
    authDomain: "disney-plus-clone-d993d.firebaseapp.com",
    projectId: "disney-plus-clone-d993d",
    storageBucket: "disney-plus-clone-d993d.appspot.com",
    messagingSenderId: "444972151507",
    appId: "1:444972151507:web:e56cd6ef737b5f059c5a26",
    measurementId: "G-JQ5BRQKVDH"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
 });
  const storage = firebase.storage();

  export {auth , provider,storage};

  export default db;


