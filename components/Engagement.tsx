"use client"

import { useState } from "react"
import { Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {Post} from '@/lib/blog-data'

export default function Engagement({
  post,
  toggleClick,
}: {
  post: Post
  toggleClick: boolean
}) {
  const [liked, setLiked] = useState(false)
  const [toggleShow, setToggleShow] = useState(false)
  const [likes, setLikes] = useState(post?.likes)

  function toggleLike() {
    setLiked((prev) => !prev)
    setLikes((prev) => (liked ? prev - 1 : prev + 1))
  }

  function clickComment() {
    if (toggleClick){
      setToggleShow(!toggleShow) 
    }
    else{
       return
    }
    
   
  }
  return (
    <div>
    <div className="flex items-center gap-4 text-sm ml-15">
      <Button variant="ghost" onClick={toggleLike} className="gap-2">
        <Heart className={`h-4 w-4 ${liked ? "fill-red-500 text-red-500" : ""}`} />
        {post?.likes}
      </Button>

      <div className="flex items-center gap-2 text-white/80">
      <Button variant="ghost" className="gap-2" onClick={clickComment}>
        <MessageCircle className="h-4 w-4" />
        {post?.comments.length}</Button>
      </div>
     
    </div>
     <ul className="w-screen flex flex-col justify-center">{toggleShow &&
        post?.comments.map((comment, index)=>(
          <li key={index}>
            {comment}</li>
        ))
        }</ul>
    </div>
  )
}
