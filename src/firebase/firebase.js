import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import {
  deleteDoc,
  getFirestore,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  query,
  where,
  setDoc,
} from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { async } from "@firebase/util";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeRBy0K-GaGSRAfwUBuvWk4pg0npt9Xr0",
  authDomain: "mercy-67ed6.firebaseapp.com",
  projectId: "mercy-67ed6",
  storageBucket: "mercy-67ed6.appspot.com",
  messagingSenderId: "107480527470",
  appId: "1:107480527470:web:b739e194fd0d5da2b5ec7f",
  measurementId: "G-P01P2XT4FG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
//Storage ref
export const storage = getStorage(app);

const itemsCol = collection(db, "Items");
export async function getItems() {
  const itemsSnapshot = await getDocs(itemsCol);
  const itemsList = itemsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return itemsList;
}

const personalCol = collection(db, "Personal");
export async function getPersonal() {
  const personalSnapshot = await getDocs(personalCol);
  const personalList = personalSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return personalList;
}

//Add data
export async function addPersonlDetails(id, data) {
  const colRe = await setDoc(doc(db, "Personal", id), data);
  return colRe;
}

export async function addItem(id, data) {
  const colRe = await setDoc(doc(db, "Items", id), data);
  return colRe;
}
export async function upDateName(id, data) {
  let ref = doc(db, "Personal", id);

  await updateDoc(ref, data);
}
export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export async function logOff() {
  return await signOut(auth)
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
}
//custom hook
export function useAuth() {
  const { loggedInUser } = useContext(AppContext);
  const [currentUser, setCurrentUser] = useState("");

  const [inUser, setInUser] = loggedInUser;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setInUser(user);
    });
  }, []);
  return currentUser;
}

// export function useSingInWithGoogle(e) {
//   const { loggedIn } = useContext(AppContext);
//   const [isSignedIn, setIsSignedIn] = loggedIn;
//   e.preventDefault();
//   const google_provider = new GoogleAuthProvider();
//   return signInWithRedirect(auth, google_provider)
//     .then((res) => {
//       setIsSignedIn(true);
//       console.log(res);
//     })
//     .catch((e) => {
//       setIsSignedIn(false);
//       console.log(e);
//     });
// }
