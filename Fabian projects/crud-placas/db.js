// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js";
import { } from "https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDP2yOFi4PPgsZHPuovZ87jzTA6jxuGoQY",
authDomain: "crud-placas.firebaseapp.com",
projectId: "crud-placas",
storageBucket: "crud-placas.appspot.com",
messagingSenderId: "598648350091",
appId: "1:598648350091:web:b4fe5f709f5755cf553b8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const saveTask = (title, description) => {
    console.log(title, description)
}