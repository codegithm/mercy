import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const addAuthListener =  (callback) =>{ 
        const onChange = (user) => {
            if(user){
                callback({});
            } else {
                callback(null)
            }
        }
        
        return onAuthStateChanged(getAuth,onChange);
}

export default addAuthListener;