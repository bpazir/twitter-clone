import firebase from "firebase";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD7xxcfSfN0LwM3UxUigwLZV3b-_RiDUyY",
    authDomain: "twitter-clone-900c9.firebaseapp.com",
    databaseURL: "https://twitter-clone-900c9.firebaseio.com",
    projectId: "twitter-clone-900c9",
    storageBucket: "twitter-clone-900c9.appspot.com",
    messagingSenderId: "21991357701",
    appId: "1:21991357701:web:0fa16c78d30df4d3bdcb6c",
    measurementId: "G-8EZSQ6T224"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;

