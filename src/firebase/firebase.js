import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore/lite";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";

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
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export async function getItems() {
  const itemsCol = collection(db, "Itesms");
  const itemsSnapshot = await getDocs(itemsCol);
  const itemsList = itemsSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log(itemsList);
  return itemsList;
}
export async function getPersonal() {
  const personalCol = collection(db, "Personal");
  const personalSnapshot = await getDocs(personalCol);
  const personalList = personalSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return personalList;
}

//Add data
export async function addPersonlDetails(data) {
  const colRe = await addDoc(collection(db, "Personal"), data);
  return colRe;
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
  const [currentUser, setCurrentUser] = useState("");
  const { loggedInUser } = useContext(AppContext);

  const [inUser, setInUser] = loggedInUser;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setInUser(user);
    });
  }, []);
  return currentUser;
}
