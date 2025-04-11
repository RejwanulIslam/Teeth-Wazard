import React, { useEffect, useState } from 'react'
import Banar from './Banar'
import { Link, NavLink, useLoaderData } from 'react-router-dom'
import Service from './Service'
import Feedback from './Feedback'

export default function Home() {
  const service = useLoaderData()

  console.log(service)



  return (
    <div>
      <Banar></Banar>
      <div className='gap-5 grid grid-cols-4'>
        {
         service.slice(0,4).map(service => <Service service={service}></Service>) 
        }
      </div>
      <button className='btn btn-primary'>
        <Link to="/alltritment">All Tritment</Link>
      </button>
      <Feedback></Feedback>
    </div>
  )
}
