import firebase from "firebase";

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyCAAGWCnSWEoWPKu7D-Y2bQ9ltvcdlxz3c",
    authDomain: "todo-list-f2c59.firebaseapp.com",
    databaseURL: "https://todo-list-f2c59.firebaseio.com",
    projectId: "todo-list-f2c59",
    storageBucket: "todo-list-f2c59.appspot.com",
    messagingSenderId: "158718509853",
    appId: "1:158718509853:web:af0881a76af28db29257f4",
    measurementId: "G-8M7WTSZ74J"
});

const db=firebaseApp.firestore();

export default db;