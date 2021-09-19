import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyALt8CQIlzxpAJ9FEGZkElznyX23EeuBkE",
  authDomain: "clone-e73b5.firebaseapp.com",
  projectId: "clone-e73b5",
  storageBucket: "clone-e73b5.appspot.com",
  messagingSenderId: "352804969081",
  appId: "1:352804969081:web:e6442778ea2e4b456492a8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
