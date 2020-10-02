import firebase from "firebase";

  var firebaseConfig = {
    apiKey: "AIzaSyAPr0pBrxwL-DZPcvJCauXKIjyxLTdxD8c",
    authDomain: "clone-ba9ab.firebaseapp.com",
    databaseURL: "https://clone-ba9ab.firebaseio.com",
    projectId: "clone-ba9ab",
    storageBucket: "clone-ba9ab.appspot.com",
    messagingSenderId: "1001526803039",
    appId: "1:1001526803039:web:8cf86f133c42f139e379ea",
    measurementId: "G-PD3D8D072D"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}; 