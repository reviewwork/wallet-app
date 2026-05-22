// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
set,
push,
get,
child,
update
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {

  apiKey: "AIzaSyDJP3t2KgKfQXgEnYZl8HBtIKP41wt8UOo",

  authDomain: "wallet-app-1421c.firebaseapp.com",

  databaseURL: "https://wallet-app-1421c-default-rtdb.firebaseio.com",

  projectId: "wallet-app-1421c",

  storageBucket: "wallet-app-1421c.firebasestorage.app",

  messagingSenderId: "940151875275",

  appId: "1:940151875275:web:77962187250da21432dd4e",

  measurementId: "G-HCKQYETN4J"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export { db, ref, set, push, get, child, update };