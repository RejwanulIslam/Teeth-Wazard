import React, { useContext, useState } from 'react'
import { authcontex } from './AuthProvider'

export default function Register() {
    const { handlerejester,handlegooglelogin, manageProfile } = (useContext(authcontex))
    const [error, seterror] = useState("")

    const handleRegisterSubmit = (event) => {
        seterror("")
        event.preventDefault()
        const e = event.target
        const name = e.name.value
        const email = e.email.value
        const password = e.password.value

        const confarmpassword = e.confarmpassword.value
        if (password !== confarmpassword) {
            seterror("password did not mach")
            return;
        }
        const PhoroURL = e.PhoroURL.value

        handlerejester(email, password)
        .then(res =>{
            manageProfile(name, PhoroURL)
        })
      
        console.log({ name, password, email, confarmpassword, PhoroURL })

    }
    return (
        <div>
            <form onSubmit={handleRegisterSubmit}>
                <div className='flex flex-col gap-2'>
                    <div className='text-black font-semibold text-start lg:ml-16'>
                        <h1> Name</h1>
                        <input type="text" name="name" placeholder="Enter Your  Name" className="input input-bordered input-secondary w-full max-w-xs" />

                    </div>

                    <div className='text-black font-semibold text-start lg:ml-16'>
                        <h1>Email</h1>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-secondary w-full max-w-xs" />

                    </div>
                    <div className='text-black font-semibold text-start lg:ml-16'>
                        <h1>Password</h1>
                        <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-secondary w-full max-w-xs" />

                    </div>
                    <div className='text-black font-semibold text-start lg:ml-16'>
                        <h1 >Confarm Password</h1>
                        <input type="password" name="confarmpassword" placeholder="Enter Your Confarm Password" className="input input-bordered input-secondary w-full max-w-xs" />

                    </div>
                    <div className='text-black font-semibold text-start lg:ml-16'>
                        <h1>Phoro URL</h1>
                        <input type="text" name="PhoroURL" placeholder="Enter Your Phoro URL" className="input input-bordered input-secondary w-full max-w-xs" />

                    </div>
                    <button className='btn btn-primary'>Register</button>
                    <button onClick={handlegooglelogin} className='btn btn-primary'>Google Login</button>
                </div>

            </form>
            {
                error && <p className='text-red-500'>{error}</p>
            }
        </div>
    )
}
