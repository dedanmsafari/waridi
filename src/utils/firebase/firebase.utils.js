import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhXvJ5x03-t9aFG75s1_3vbR0XaaGVmc8",
  authDomain: "waridi-4784b.firebaseapp.com",
  projectId: "waridi-4784b",
  storageBucket: "waridi-4784b.appspot.com",
  messagingSenderId: "892672315978",
  appId: "1:892672315978:web:4a7f20e300e86aa8e70cb3",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore();

export const createUserDocumentfromAuth = async (auth, additionalData) => {
  if (!auth) return;
  const userDocRef = doc(db, "users", auth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // !userSnapshot.exists() i.e check if data exists in the database if not create data in databbase
  if (!userSnapshot.exists()) {
    const { displayName, email } = auth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  //otherwise just return the reference to the user document

  return userDocRef;
};

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: "select_account" });

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
