import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Service({ service }) {
    const { id, treatment, description, cost, image } = service
    return (
        <div className="card w-72 bg-base-100 shadow-xl">
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge badge-secondary">{cost}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/detels/${id}`}>
                    <button className="badge bg-black font-semibold text-white badge-outline">Chack Out</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
