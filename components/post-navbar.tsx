import React from  'react'
import { Bell, User, UserCircle } from "lucide-react"
import Link from 'next/link'


export default function Navbar() {
  return (
        <header className="mx-10 mb-6 flex justify-between text-white">
        <Link href='/post'><h1 className="text-3xl font-bold">Explore</h1></Link>
        <div className="flex  gap-x-10">
          <Link href='/create-blog' className='bg-sky-800 px-3 rounded-lg items-center text-2xl py-0.5'>+</Link>
            <div className='flex pt-2 gap-10'><Bell className='h-6 w-6 inline'/>
            <UserCircle className='h-6 w-6 inline'/></div>
        </div>

      </header>
  )
}
