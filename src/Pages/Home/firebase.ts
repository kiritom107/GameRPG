// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { doc, getFirestore, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFTs3lljHeFbvvB3RLiqi_5GPe5UW_oQc",
  authDomain: "rubaip.firebaseapp.com",
  projectId: "rubaip",
  storageBucket: "rubaip.appspot.com",
  messagingSenderId: "401447375398",
  appId: "1:401447375398:web:d3e83bb2951eb584d84ce7",
  measurementId: "G-QDX3GDWDKS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
export async function saveStreet(poi: any) {
  // Add a new document in collection "cities"

  return setDoc(
    doc(db, "BoyesIps", `${Math.floor(Math.random() * 999999999)}`),
    {
      ip: poi,
    }
  );
}
