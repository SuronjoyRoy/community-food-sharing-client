
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const AuthProvider = ({children}) => {

const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

const createUser = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}
const signIn = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};

const signInwithGoogle = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);

}


const logOut = ()=>{
    setLoading(true);
    return signOut(auth);

};

useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, currentUser=>{
        console.log('User in the state changed', currentUser);
        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unsubcribe();
    }
},[])


    const authinfo = {
        user,
        loading,
        createUser,
        signIn,
        signInwithGoogle,
        logOut,
    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;