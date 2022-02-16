// import firebase  from 'firebase/compat/app';
import { getAuth, signOut } from 'firebase/auth';

const signOut = async () =>{
    try{ 
        await signOut();  
    } catch (e){
        throw new Error('Error signing out')
    }
}

export default signOut;