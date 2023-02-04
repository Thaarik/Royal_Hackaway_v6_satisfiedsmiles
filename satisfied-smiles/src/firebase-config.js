// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7OrUxQxJfk4g7zVjOZ9flpytQa7wU8K0",
  authDomain: "satisfiedsmiles-48d25.firebaseapp.com",
  projectId: "satisfiedsmiles-48d25",
  storageBucket: "satisfiedsmiles-48d25.appspot.com",
  messagingSenderId: "806110210652",
  appId: "1:806110210652:web:98db8202a04c5167fa5499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); //this will generate the instance of the class

