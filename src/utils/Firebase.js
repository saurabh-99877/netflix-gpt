// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDv5pBT7IxkEoIbmsQcDC9x2RLqqVdMD1c",
  authDomain: "netflix-9456a.firebaseapp.com",
  projectId: "netflix-9456a",
  storageBucket: "netflix-9456a.firebasestorage.app",
  messagingSenderId: "582657716623",
  appId: "1:582657716623:web:3055438796e489f639dbfa",
  measurementId: "G-H1T06HQ49R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();