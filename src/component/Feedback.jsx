import React, { useEffect, useState } from 'react'

export default function Feedback() {

    const [hclint, sethclient] = useState([])

    useEffect(() => {

        fetch('/happyClient.json')
            .then(res => res.json())
            .then(data => sethclient(data))

    }, [])

    console.log(hclint)
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                hclint.map(client => <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className='flex gap-3'>
                            <img className='w-12 h-12 rounded-full' src={client.userpng}></img>
                            <h2 className="card-title">{client.name}</h2>

                        </div>

                        <p>{client.review}</p>
                        <div className="card-actions flex align-middle justify-end">
                            
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
// {
//     "reviewId": 1,
//     "name": "Emily Johnson",
//     "userpng": "https://randomuser.me/api/portraits/women/1.jpg",
//     "review": "Absolutely loved the service! The dentist was kind and professional."
// },