import React from 'react'
import {users,posts} from '@/lib/blog-data'
import getNameInitials from '@/lib/utils'
import {User} from '@/lib/blog-data'
import Follow from '@/components/follow';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Nav from '@/components/mini-nav';
import Userpost from '@/components/userposts'
import { notFound } from "next/navigation"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type ParamProps={
    params:Promise<{id:string}>
}

export default async function page({params}:ParamProps) {
    const {id}=await params;
    const userId=Number(id)
    const user= users.find((u : User)=>u.id===userId)
    if (!user) notFound()

    const stories=posts.filter((p)=>p.userId===userId)

  return (
    
    <div className='m-5 mt-0 md:m-15'>
        <Nav text={user.username}/>
        <Avatar className='mt-5 size-40'>
            <AvatarImage src={user.avatar ?? ""} className="object-cover "/>
            <AvatarFallback>{getNameInitials(user.name)}</AvatarFallback>
        </Avatar>
        <div className='flex flex-col gap-2 pt-4 p-5'>
            <h1 className='font-bold text-lg'>{user.name}</h1>
            <i className='text-sm text-sky-500'>@{user.username}</i>
            <p>{user.about}</p>
        </div>
        <div className='flex flex-col justify-center'>
           <div className='w-1/2 flex justify-around p-5'> 
            <Follow className='flex flex-col'>
                <p>Followers</p>
                <p>{user.followers}</p>
            </Follow>
            <Follow className='flex flex-col'>
                <p>Following</p>
                <p>{user.following}</p>
            </Follow>
        </div>

        
            <Tabs defaultValue="stories" className="w-full ">
  <TabsList>
    <TabsTrigger value="stories">Stories</TabsTrigger>
    <TabsTrigger value="about">About</TabsTrigger>
  </TabsList>
  <TabsContent value="stories">
    <ul className='list-none'>{stories.map(st=>(
        <li key={st.id}><Userpost post={st}/></li>
    ))}</ul>
  </TabsContent>
  <TabsContent value="about">{user.about}</TabsContent>
</Tabs>
       
        


 </div>
 </div>
  )
}
