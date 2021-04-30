import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuBSNk7mfJ9M2eRyDKE5xbUaYLk_HbWLM",
  authDomain: "linked-clone-7e2df.firebaseapp.com",
  projectId: "linked-clone-7e2df",
  storageBucket: "linked-clone-7e2df.appspot.com",
  messagingSenderId: "521450701177",
  appId: "1:521450701177:web:82ada2f1d6630358322fa8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
