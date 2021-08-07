import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD1mcVzZPjDZH6yDEqtIDYLgU_ub_bbpYw',
    authDomain: 'lab-notes-my-notes.firebaseapp.com',
    projectId: 'lab-notes-my-notes',
    storageBucket: 'lab-notes-my-notes.appspot.com',
    messagingSenderId: '848722595062',
    appId: '1:848722595062:web:27554bdda1fb5ea2d630d7',
    measurementId: 'G-5VSFRW4H3Y'
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export {
    firebase, auth, db
}