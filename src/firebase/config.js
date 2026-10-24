
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBVniAXT8swRyQXa2vsSvyltCTZsI5vris",
    authDomain: "live-chat-4360c.firebaseapp.com",
    projectId: "live-chat-4360c",
    storageBucket: "live-chat-4360c.firebasestorage.app",
    messagingSenderId: "167996791568",
    appId: "1:167996791568:web:1fd316161bce6b4d0c2395",
    measurementId: "G-9X1PKBSN12",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const timestamp = serverTimestamp;

export { db, timestamp, auth };
