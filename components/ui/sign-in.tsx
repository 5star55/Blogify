'use client'
import React from "react"
import {Button} from '@/components/ui/button'
import {useRouter} from 'next/navigation';

export default function SignIn() {
  const router= useRouter()
    return (
    <div
      style={{
        backgroundImage: "url('/writing.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        width: "100%",
      }}
      className="flex flex-col w-full h-full justify-center items-center"
    >
        <section className='mx-20 text-slate-800'>
        <h1 className='font-extrabold text-5xl'>Write Your <span className='text-blue-500 block'>Story.</span></h1>
        <p className='pt-'>Join a community of writers and share your voice with the world</p>
        <Button onClick= {()=>router.push('/Auth/user-auth?tab=Sign-up')} className='mt-10 mb-5 block w-full'>Get Started</Button>
        <Button onClick= {()=>router.push('/Auth/user-auth?tab=Login')}  className="w-full bg-white shadow text-black hover:text-white">Log in</Button>
    
    </section>
    </div>
  )
}
