import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC5sTFVCgYV_c6fdzKAobws0Q8LK9cwYfQ",
  authDomain: "ig-reels-70c69.firebaseapp.com",
  databaseURL: "https://ig-reels-70c69.firebaseio.com",
  projectId: "ig-reels-70c69",
  storageBucket: "ig-reels-70c69.appspot.com",
  messagingSenderId: "378560057037",
  appId: "1:378560057037:web:1835b023c0605c41c8a384",
  measurementId: "G-DH7EHVDJVF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
