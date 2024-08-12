import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbzTSLnqsu50bsq-M36MbauQheoF9BRFU",
  authDomain: "notion-clone-sw.firebaseapp.com",
  projectId: "notion-clone-sw",
  storageBucket: "notion-clone-sw.appspot.com",
  messagingSenderId: "474392610451",
  appId: "1:474392610451:web:6aef8fc9d04a13a9162f66"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };