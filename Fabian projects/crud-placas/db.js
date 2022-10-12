// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-app.js';
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
} from 'https://www.gstatic.com/firebasejs/9.12.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDP2yOFi4PPgsZHPuovZ87jzTA6jxuGoQY',
  authDomain: 'crud-placas.firebaseapp.com',
  projectId: 'crud-placas',
  storageBucket: 'crud-placas.appspot.com',
  messagingSenderId: '598648350091',
  appId: '1:598648350091:web:b4fe5f709f5755cf553b8e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export const saveTask = (title, description) => {
  addDoc(collection(db, 'tasks'), { title: title, description: description });
};
export const getTasks = () => getDocs(collection(db, 'tasks'));
export const onGetTasks = callback =>
  onSnapshot(collection(db, 'tasks'), callback);
export const deleteTasks = id => deleteDoc(doc(db, 'tasks', id));
export const getTask = id => getDoc(doc(db, 'tasks', id));

export const updateTask = (id, newFields) =>
  updateDoc(doc(db, 'tasks', id), newFields);
