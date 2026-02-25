import React from "react"
import { Input } from "@/components/ui/input"
import { getPosts } from "@/lib/blog-data"
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
import Profile from '@/components/profile';
import Link from 'next/link'
import type {Post} from '@/lib/blog-data'


export default async function Userposts({post}:{post:Post}) {
const posts= await getPosts()

return (
            <Card key={post.id} className="bg-slate-800 text-white mb-10">
              <CardHeader>
                <CardTitle>
                  <Link href={`/post/${post.id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-10 text-md md:text-2xl md:flex-row">
                <Link href={`/post/${post.id}`} className="block">
                  {post.authorImage && <Image
                    src={post?.authorImage}
                    alt={post.title}
                    width={1200}
                    height={30}
                    
                  />}
                </Link>
                <Link href={`/post/${post.id}`} className="block">
                <p>{post.content}</p></Link>
              </CardContent>
              <Engagement post={post}/>
              <CardFooter>
                <Link href={`/post/${post.id}`} className="text-sm text-sky-300 hover:underline">
                  Read full post
                </Link>
              </CardFooter>
            </Card>
          )
}
