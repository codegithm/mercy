import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const signIn = async (email, password) =>{
    try{        
       const results = await signInWithEmailAndPassword(getAuth,email,password);
        return results;
    } catch (e){
        throw new Error('Error signing in')
    }
}

export default signIn;