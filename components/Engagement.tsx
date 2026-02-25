"use client"

import { useState } from "react"
import { Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {Post} from '@/lib/blog-data'

export default function Engagement({
  post,
}: {
  post: Post
}) {
  const [liked, setLiked] = useState(false)
  const [toggleShow, setToggleShow] = useState(false)
  const [likes, setLikes] = useState(post?.likesCount)

  function toggleLike() {
    setLiked((prev) => !prev)
    setLikes((prev) => (liked ? prev - 1 : prev + 1))
  }
  return (
    <div>
    <div className="flex items-center gap-4 text-sm ml-15">
      <Button variant="ghost" onClick={toggleLike} className="gap-2">
        <Heart className={`h-4 w-4 ${liked ? "fill-red-500 text-red-500" : ""}`} />
        {post?.likesCount}
      </Button>

      <div className="flex items-center gap-2 text-white/80">
      <Button variant="ghost" className="gap-2">
        <MessageCircle className="h-4 w-4" />
        {post?.commentsCount}</Button>
      </div>
     
    </div>
    </div>
  )
}
