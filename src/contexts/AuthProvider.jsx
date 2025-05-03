import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const googleProvider=new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user, setUser]=useState(null)
    const [loading,setLoading]=useState(true)


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    // onAuthStateChanged(auth,(createUser)=>{
    //     if(createUser){
    //         console.log('user',createUser)
    //     }
    //     else{
    //         console.log('user not found',createUser) 
    //     }
        
    // })
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(createUser)=>{
            console.log('current user inside useeffect on auth state change',createUser)
            setUser(createUser)
            setLoading(false)
        })
        return() =>{
            unSubscribe()
        }
    },[])

    const userInfo={
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;