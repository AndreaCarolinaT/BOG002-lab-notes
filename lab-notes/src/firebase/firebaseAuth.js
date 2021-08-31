import { auth, googleProvider } from './firebaseConfig.js';

export const SigupUser = (email, password) => auth.createUserWithEmailAndPassword(email, password)

export const SigninUser = (email, password) => auth.signInWithEmailAndPassword(email, password)    

export const GoogleAuth = () => auth.signInWithPopup(googleProvider) 