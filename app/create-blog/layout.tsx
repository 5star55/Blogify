import Navbar from '@/components/post-navbar'
import { X } from 'lucide-react';
import {Button} from '@/components/ui/button'
import Link from 'next/link'



export default function PostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="h-screen w-full bg-slate-950">
    <div className='pt-2 flex justify-around border-b p-2 border-white'> 
      <Link href='/post'><X /></Link>
      <i className=''>DRAFT</i>
      <Button type='submit' form='create-blog' className='bg-sky-700'>Publish</Button>
   </div>
      {children}
    </section>
  )
}
