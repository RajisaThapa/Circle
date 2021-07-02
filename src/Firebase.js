// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyCP_RmFzZHT7BKSESwCMUeXcC6Z3iZcRsk",
    authDomain: "circle-5fe3e.firebaseapp.com",
    projectId: "circle-5fe3e",
    storageBucket: "circle-5fe3e.appspot.com",
    messagingSenderId: "450025845968",
    appId: "1:450025845968:web:f6cdc731080d3a2b1e5ad5",
    measurementId: "G-GWZVF2N7SN"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;