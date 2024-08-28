import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDXdoCo6Ratj_YNgWfV1gzzXkEiXpd8SMU",
    authDomain: "clone-news-israalhadii.firebaseapp.com",
    projectId: "clone-news-israalhadii",
    storageBucket: "clone-news-israalhadii.appspot.com",
    messagingSenderId: "756279652476",
    appId: "1:756279652476:web:3e321445f8d864f1e3d9f9"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();