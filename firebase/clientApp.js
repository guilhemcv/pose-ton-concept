// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDmwvGY1Mc2waR-FaIq0azslg9eUcaGxu0',
  authDomain: 'next-notion-l.firebaseapp.com',
  projectId: 'next-notion-l',
  storageBucket: 'next-notion-l.appspot.com',
  messagingSenderId: '391195623847',
  appId: '1:391195623847:web:166d3e20ebcb0b1749f682',
};
let app;
// Initialize Firebase
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
}
export const db = getFirestore(app);
