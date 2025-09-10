"use client"
import React, { useState } from 'react'

const Registration = () => {
 
     const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
        const handleEmailInput =(e)=>{
            setEmail(e.target.value)
        }
     
        const handlePassword = (e)=>{
            setPassword(e.target.value)
        }
        const handleLogin =()=>{
    
        }
      return (
        <div className='bg-white w-[424px] p-8 rounded-xl text-center'>
            <h2 className='text-[#191C1F] font-public_sans mb-[20px] text-xl'>Sign Up for new account</h2>
            <p className='text-left'>Email Address</p>
            <input onChange={handleEmailInput} className='w-[360] border-gray-300 border rounded-[2px] h-[44px] mt-2 mb-4' type="text" />
            <p className='text-left mb-2'>Password</p>
            <input onChange={handlePassword} className='w-[360] border-gray-300 border rounded-[2px] h-[44px] mb-5' type="text" />
            <button onClick={handleLogin} className='mx-auto block bg-[#FA8232] w-[360px] text-white font-semibold text-[20px] py-2 mb-6'>Login</button>
            <p className='text-gray-300'>Don't have account</p>
            <button className='mx-auto block border-[#FA8232] border mt-3 w-[360px] text-[#FA8232] font-semibold text-[20px] py-2 mb-6'>Create Account</button>
        </div>
      )
  
}

export default Registration