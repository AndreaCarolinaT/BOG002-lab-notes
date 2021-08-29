import { auth } from './firebaseConfig.js';
import firebase from 'firebase/app';

export const SigupUser = (email, password) => auth.createUserWithEmailAndPassword(email, password)
                
export const SigninUser = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password)    
 
export function GoogleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
};

//cambiar funciones a funciones puras como me explicó Ana
//pendiente modificar funcion GoogleAuth
