import React, { useState } from 'react'
import signin from './../Assets/signinbg.jpg'
export default function SignIn() {
    const [showPassword,setShowPassword]=useState(false);
    const [formdata,setFormdata]=useState(
        {
            email:"",
            password:"",
        }
    );
    const {email,password} =formdata;
   function onchange(e){
      setFormdata((prevState)=>({
        ...prevState,
        [e.target.id]:e.target.value,
        
      }))
   }
  return (
    <section >
        <h1 className='text-3xl text-center mt-8 font-bold'>Sign In</h1>
        <div className='flex justify-center flex-wrap items-center
        px-6 py-12 max-w-6xl mx-auto '>
            <div className='md:w-[65%] lg:w-[50%] mb-12 md:mb-6'>
                <img className='w-full rounded-2xl' src={signin} alt="" />
            </div>
           <div className='w-full md:w-[65%] lg:w-[40%] lg:ml-20 '>
             <form >
               <input className='w-full px-4 py-2
               text-xl text-gray-700 bg-white
               border-gray-300 rounded transition ease-in-out' type='email' id='email' value={email}
               onChange={onchange}
               placeholder='Email Address'
               />
               <div>
               <input className='w-full px-4 py-2
               text-xl text-gray-700 bg-white
               border-gray-300 rounded transition ease-in-out' type='password' id='email' value={email}
               onChange={onchange}
               placeholder='Password'
               />
               </div>
             </form>
           </div>
        </div>
    </section>
  )
}
