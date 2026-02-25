"use client";

import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post } from "@/lib/blog-data";
import Engagement from "@/components/Engagement";

type PostListClientProps = {
  initialPosts: Post[];
};

export default function PostListClient({ initialPosts }: PostListClientProps) {
  const posts = initialPosts;

  return (
    <div className="min-h-screen bg-slate-950 p-6 text-white">
      <Input type="search" placeholder="search stories, writers, or tags" />
      <h1 className="mt-5 text-2xl">Suggested Blogs</h1>

      <div className="mt-6 space-y-6">
        {posts.map((post) => {
          return (
            <Card key={post.id} className="mb-10 bg-slate-800 text-white">
              <CardHeader>
                <CardTitle>
                  <Link href={`/post/${post.id}`} className="text-center hover:underline">
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription />
              </CardHeader>
              <CardContent className="flex flex-col gap-10 text-md md:flex-row md:text-2xl">
                <Link href={`/post/${post.id}`} className="block">
                  {post.authorImage && (
                    <Image
                      src={post.authorImage}
                      alt={post.title}
                      width={1200}
                      height={30}
                    />
                  )}
                </Link>
                <div className="flex justify-between gap-20">
                  <Link href={`/post/${post.id}`} className="block">
                    <p>{post.content}</p>
                  </Link>
                </div>
              </CardContent>
              <Engagement post={post} />
              <CardFooter>
                <Link href={`/post/${post.id}`} className="text-sm text-sky-300 hover:underline">
                  Read full post
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
