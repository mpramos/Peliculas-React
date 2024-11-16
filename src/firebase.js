// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCf5VlTd3toxz2CZ_dRdxRAp8N6qzNqRTs",
  authDomain: "demoplayer-be34f.firebaseapp.com",
  projectId: "demoplayer-be34f",
  storageBucket: "demoplayer-be34f.firebasestorage.app",
  messagingSenderId: "554958142891",
  appId: "1:554958142891:web:af38b1365473f45c8f66ee"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider= new GoogleAuthProvider()
const db= getFirestore(app)
export {auth,provider,signInWithPopup,db}