'use client'
import React from 'react'
import {useState} from 'react'

export default function page() {
    
  const [title, setTitle]= useState("")
  const [story, setStory]= useState("")
  return (
    <div>
        <form action="" id='create-blog'>
            <div className='flex flex-col gap-10 text-3xl mt-10 mx-10'>            
                <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='TITLE' className='placeholder:italics p-5 rounded-lg'/>
                <textarea value={story} onChange={(e)=> setStory(e.target.value)} placeholder='Tell your story...' className='p-5 rounded-lg'/>
            </div>

        </form>
    </div>
  )
}
