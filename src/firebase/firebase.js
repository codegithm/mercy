import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeRBy0K-GaGSRAfwUBuvWk4pg0npt9Xr0",
  authDomain: "mercy-67ed6.firebaseapp.com",
  projectId: "mercy-67ed6",
  storageBucket: "mercy-67ed6.appspot.com",
  messagingSenderId: "107480527470",
  appId: "1:107480527470:web:b739e194fd0d5da2b5ec7f",
  measurementId: "G-P01P2XT4FG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export function signIn (email, password){       
    return signInWithEmailAndPassword(auth,email,password);
}

//custom hook
export function useAuth(){
  const [currentUser, setCurrentUser] = useState('');
  useEffect(()=>{
    onAuthStateChanged(auth, user =>{
      setCurrentUser(user)
    })
  }, [])
  return currentUser;
}