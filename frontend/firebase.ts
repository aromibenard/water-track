// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw4nwqR5C-AxyfYYQ3IajN2vS3UB-g8oA",
  authDomain: "water-trak.firebaseapp.com",
  projectId: "water-trak",
  storageBucket: "water-trak.appspot.com",
  messagingSenderId: "66925816361",
  appId: "1:66925816361:web:200a26a382a1ab8a8aca38"
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);