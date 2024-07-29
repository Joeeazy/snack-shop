// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHU0fsMMGV6plLeDkRyTkQCb5x9tme060",
  authDomain: "snack-bf428.firebaseapp.com",
  projectId: "snack-bf428",
  storageBucket: "snack-bf428.appspot.com",
  messagingSenderId: "274798602605",
  appId: "1:274798602605:web:55163ce67678fc97751264"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
