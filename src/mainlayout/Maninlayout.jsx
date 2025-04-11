import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

export default function Maninlayout() {
  return (
    <div>
        
        <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  )
}
