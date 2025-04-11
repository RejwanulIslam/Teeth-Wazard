import React from 'react'

export default function Modal() {
    const handleSubmit = (event) => {

        event.preventDefault()
        const e = event.target
        const name = e.name.value
        const lastname = e.lastname.value
        const email = e.email.value
        const number = e.number.value
        const date = e.date.value
        const address = e.address.value

        console.log({ name, lastname, email, number, date, address, })

    }
    return (
        <div>

            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-2'>
                            <div className='text-black font-semibold text-start lg:ml-16'>
                                <h1>First Name</h1>
                                <input type="text" name="name" placeholder="Enter Your First Name" className="input input-bordered input-secondary w-full max-w-xs" />

                            </div>
                            <div className='text-black font-semibold text-start lg:ml-16'>
                                <h1>Last Name</h1>
                                <input type="text" name="lastname" placeholder="Enter Your Last Name" className="input input-bordered input-secondary w-full max-w-xs" />

                            </div>
                            <div className='text-black font-semibold text-start lg:ml-16'>
                                <h1>Email</h1>
                                <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-secondary w-full max-w-xs" />

                            </div>
                            <div className='text-black font-semibold text-start lg:ml-16'>
                                <h1>Phone number</h1>
                                <input type="number" name="number" placeholder="Enter Your Phone number" className="input input-bordered input-secondary w-full max-w-xs" />

                            </div>
                            <div>
                                <h1 className='text-black font-semibold text-start lg:ml-16'>Appioment Date</h1>
                                <input type="date" name="date" placeholder="Enter Your Appioment Date" className="input input-bordered input-secondary w-full max-w-xs" />

                            </div>
                            <div className='text-black font-semibold text-start lg:ml-16'>
                                <h1>Address</h1>
                                <input type="text" name="address" placeholder="Enter Your Address" className="input input-bordered input-secondary w-full max-w-xs" />

                            </div>
                            <button className='btn btn-primary'>Make Appioement</button>
                        </div>

                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
