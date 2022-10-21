
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBq9_PeO_OKUYsFkC7KTzx36NmUCy7gIdU",
    authDomain: "masterz-final-project.firebaseapp.com",
    projectId: "masterz-final-project",
    storageBucket: "masterz-final-project.appspot.com",
    messagingSenderId: "271461527028",
    appId: "1:271461527028:web:15e1ce004b0aba043c5da1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



export default db;