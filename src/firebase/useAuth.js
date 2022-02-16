import { useState, useEffect } from "react";
import addAuth from './addAuthListener'
import getCurrentUser from "./getCurrentUser";

const useAuth = () => {
    const [authInfo, setAuthInfo] = useState(() =>{
        const user = getCurrentUser();
        const isLoading = !user;

        return { isLoading, user };
    });
    useEffect(()=>{
        const unsubscribe =  addAuth(user =>{
            setAuthInfo({ isLoading: false, user})
        });

        return unsubscribe;
    }, []);
    return authInfo;
}

export default useAuth;