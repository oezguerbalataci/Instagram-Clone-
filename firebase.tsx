// Import the functions you need from the SDKs you need
import { getApps, initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXZ2fJtOa0zNnAdrTTUa8BovUFviV6i2E",
  authDomain: "insta-c-d33a4.firebaseapp.com",
  projectId: "insta-c-d33a4",
  storageBucket: "insta-c-d33a4.appspot.com",
  messagingSenderId: "584732207267",
  appId: "1:584732207267:web:2635dfa4d6bff0925fb716",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
