import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import Modal from './Modal'

export default function Detels() {
    const data = useLoaderData()
    const service = useParams()

    console.log(service)
    const singeldata = data.find(data => data.id == service.id)
    const { id, treatment, description, cost, image } = singeldata
    console.log(singeldata)
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                    <p className="mb-5">{description}</p>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book Appionment</button>
                  <Modal></Modal>
                </div>

            </div>
        </div>
    )
}
