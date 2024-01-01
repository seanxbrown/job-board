import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, User, signOut, signInWithEmailAndPassword  } from "firebase/auth";
import { getFirestore, doc, setDoc, collection, query, where, getDocs  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlRdlxdzb58nF_KP-294KQcj6wr5mMtjI",
  authDomain: "job-board-2d3d6.firebaseapp.com",
  projectId: "job-board-2d3d6",
  storageBucket: "job-board-2d3d6.appspot.com",
  messagingSenderId: "656145598850",
  appId: "1:656145598850:web:672266c5f1a9a1a517e79b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { 
    app,
    auth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut ,
    db,
    doc,
    setDoc,
    signInWithEmailAndPassword,
    collection,
    query,
    where,
    getDocs

    }

export type { User }
