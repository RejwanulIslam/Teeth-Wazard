import React, { useContext } from 'react'
import { authcontex } from './AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'

export default function PrivactRoute({children}) {
    const {user, loding} = useContext(authcontex)
     const location= useLocation()
     console.log(location)
    if(loding){
        return <span className="loading loading-spinner text-neutral"></span>
    }
    if(!user){
        return <Navigate to="/login" state={{from:location.pathname}} ></Navigate>
    }
  return children                        
}
