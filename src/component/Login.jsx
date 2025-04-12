import React, { useContext } from 'react'
import { authcontex } from './AuthProvider'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export default function Login() {
  const { handlerejester, handlelogin, handlegooglelogin, handlelogout } = useContext(authcontex)
  const location = useLocation()
  const navigate = useNavigate()
   console.log(location)
  
  const handleLoginrSubmit = (event) => {
   

    event.preventDefault()
    const e = event.target
    const email = e.email.value;
    const password = e.password.value;
    handlelogin(email, password)
    .then(res=>{
      navigate(location.state.from)  
    })
    console.log({ email, password, })


  }
  const googlelogin =()=>{
    handlegooglelogin()
    .then(res=>{
      navigate(location.state.from)  
    })
  }

  return (
    <div>Login
      <div>
        <form onSubmit={handleLoginrSubmit}>
          <div className='text-black font-semibold text-start lg:ml-16'>
            <h1>Email</h1>
            <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered input-secondary w-full max-w-xs" />

          </div>
          <div className='text-black font-semibold text-start lg:ml-16'>
            <h1>Password</h1>
            <input type="password" name="password" placeholder="Enter Your Password" className="input input-bordered input-secondary w-full max-w-xs" />
            <button className='mt-4 btn btn-primary block'>Login</button>
          </div>
          

        </form>
      </div>
      <div>
      <button onClick={ googlelogin} className='btn btn-primary text-start'>google login</button>
      </div>
      <div className='flex'>
        <p>you have do not acount plase register</p><NavLink to="/register"><button className='btn btn-ghost'>Register</button></NavLink>
      </div>
    </div>
  )
}
