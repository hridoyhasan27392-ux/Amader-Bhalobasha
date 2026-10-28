import { initializeApp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc, updateDoc, onSnapshot, serverTimestamp } from "https://www.gstatic.com/firebasejs/13.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBdcoNjol98GginB2pgj5poxb6LoPPpI",
  authDomain: "amader-bhalobasha.firebaseapp.com",
  projectId: "amader-bhalobasha",
  storageBucket: "amader-bhalobasha.firebasestorage.app",
  messagingSenderId: "192075618706",
  appId: "1:192075618706:web:ae76e6d5a26bdd1f36094b",
  measurementId: "G-7EH1P86QG8"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export { signInWithEmailAndPassword, signOut, onAuthStateChanged, doc, getDoc, setDoc, updateDoc, onSnapshot, serverTimestamp };
