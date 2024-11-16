import React, { createContext, useContext, useState } from 'react'

import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from '../firebase';
import { useEffect } from 'react';


const AuthContext = createContext()

export const useAuth=()=>useContext(AuthContext)

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)

    const login = async () => {
        try {
            const result= await signInWithPopup(auth,provider)
            setUser(result.user)
            console.log('user', result.user);
            
        } catch (error) {
            console.error('Error en la autentcación ', error);
        }
    }
    const logout= async () => {
        try {
            await signOut(auth)
            setUser(null)
        } catch (error) {
            console.error('Error al iniciar sesion ', error);
        }
    }
    useEffect(()=>{
        const unsuscribe=auth.onAuthStateChanged((currentUser)=>{
            setUser(currentUser)
        })
        return unsuscribe
    } ,[])

    return (
            <AuthContext.Provider value={{user,login,logout}}>
                {children}
            </AuthContext.Provider>
    )

}