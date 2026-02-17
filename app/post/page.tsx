import React from "react"
import { Input } from "@/components/ui/input"
import { posts, users } from "@/lib/blog-data"
import Engagement from '@/components/Engagement'
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Profile from '@/components/profile'
import Link from 'next/link'

export default function Page() {
  const userById = new Map(users.map((u) => [u.id, u]))

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <Input type="search" placeholder="search stories, writers, or tags" />
      <h1 className="mt-5 text-2xl">Suggested Blogs</h1>

      <div className="mt-6 space-y-6">
        {posts.map((post) => {
          const user = userById.get(post.userId)
          return (
            <Card key={post.id} className="bg-slate-800 text-white mb-10">
              <CardHeader>
                <CardTitle>
                  <Link href={`/post/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                  <Link href={`/profile/${user?.id}`}>
                  <Profile user={user} /></Link>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-10 text-md md:text-2xl md:flex-row">
                <Link href={`/post/${post.id}`} className="block">
                  {post.image && <Image
                    src={post?.image}
                    alt={post.title}
                    width={1200}
                    height={30}
                    
                  />}
                </Link>
                <Link href={`/post/${post.id}`} className="block">
                <p>{post.body}</p></Link>
              </CardContent>
              <Engagement post={post} toggleClick={false}/>
              <CardFooter>
                <Link href={`/post/${post.id}`} className="text-sm text-sky-300 hover:underline">
                  Read full post
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
