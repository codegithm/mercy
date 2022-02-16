import { getAuth } from 'firebase/auth';

const getCurrentUser =  () =>{
    const user = getAuth().currentUser;
    
    if(!user) return null;
    return {};
}

export default getCurrentUser;