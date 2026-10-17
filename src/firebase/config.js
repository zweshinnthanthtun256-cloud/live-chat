import firebase from "firebase/app"
import "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyBVniAXT8swRyQXa2vsSvyltCTZsI5vris",
  authDomain: "live-chat-4360c.firebaseapp.com",
  projectId: "live-chat-4360c",
  storageBucket: "live-chat-4360c.firebasestorage.app",
  messagingSenderId: "167996791568",
  appId: "1:167996791568:web:1fd316161bce6b4d0c2395",
  measurementId: "G-9X1PKBSN12"
};

firebase.initializeApp(firebaseConfig);
let db=firebase.firestore();
let timestamp=firebase.firestore.FieldValue.serverTimestamp;

export {db,timestamp}