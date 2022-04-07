// compatible with version 8
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC25qk9uMBJRV_QluFYHgtCm-KBuGct2HU",
  authDomain: "clone-b30fd.firebaseapp.com",
  projectId: "clone-b30fd",
  storageBucket: "clone-b30fd.appspot.com",
  messagingSenderId: "501617751411",
  appId: "1:501617751411:web:3cc2caf6ea47f66146c106",
  measurementId: "G-7S7QHL6VNL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

export const auth = firebase.auth();
