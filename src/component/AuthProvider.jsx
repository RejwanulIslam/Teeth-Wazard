import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, updateProfile, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react'
import auth from "../firebase/firebase.config";

export const authcontex = createContext()

export default function AuthProvider({ children }) {
    const googleprovider = new GoogleAuthProvider();
    const [user, setuser] = useState(null)
    const [loding, setloding] = useState(true)
    console.log(user)
    const handlerejester = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
            })
    }
    const handlelogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user)
            })
    }
    const handlegooglelogin = () => {
        return signInWithPopup(auth, googleprovider)
            .then((result) => {
                console.log(result.user)
            })
    }
    const handlelogout = () => {
        signOut(auth)
        .then(() => {
            console.log ("Sign-out successful.")
          })
    }

    const manageProfile = (name, image) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })

    }
    const authinfo = {
        handlerejester,
        handlelogin,
        handlegooglelogin,
        handlelogout,
        manageProfile,
        user,
        setuser,
        setloding,
        loding

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {

            if (currentuser) {
                setuser(currentuser)
            }
            else {
                setuser(null)

            }
            setloding(false)

            return () => {
                unsubscribe()
            }

        })
    }, [])
    return (
        <div>
            <authcontex.Provider value={authinfo}>
                {children}
            </authcontex.Provider>
        </div>
    )
}

