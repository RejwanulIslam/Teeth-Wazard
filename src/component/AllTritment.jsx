import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Service from './Service'

export default function AllTritment() {
    const service = useLoaderData()
    console.log(service)

  return (
    <div>
           <div>
        <div className='gap-5 grid grid-cols-4'>
                {
                 service.map(service => <Service service={service}></Service>) 
                }
              </div>
    </div>
    </div>
  )
}
