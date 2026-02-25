"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Pencil, Trash } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Post } from "@/lib/blog-data";
import { deletePost } from "@/lib/blog-data";
import Engagement from "@/components/Engagement";
import EditForm from "@/components/edit-post";

type PostDetailClientProps = {
  initialPost: Post;
};

export default function PostDetailClient({ initialPost }: PostDetailClientProps) {
  const router = useRouter();
  const [post, setPost] = useState<Post>(initialPost);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  async function handleDelete() {
    try {
      await deletePost(post.id);
      router.push("/post");
      router.refresh();
    } catch (error) {
      console.error("Failed to delete post", error);
    }
  }

  return (
    <div>
      <Card className="bg-slate-950 text-white">
        <CardHeader>
          <div className="flex items-center justify-between gap-4">
            <CardTitle className="text-3xl extrabold">{post.title}</CardTitle>
            {isLoggedIn ? (
              <div className="flex gap-4">
                <button onClick={() => setIsEditing((value) => !value)}>
                  <Pencil />
                </button>
                <button onClick={handleDelete}>
                  <Trash />
                </button>
              </div>
            ) : null}
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-10 p-10 text-md md:flex-row md:text-2xl">
          {post.authorImage && (
            <Image
              src={post.authorImage}
              alt={post.title}
              width={1200}
              height={630}
              className="mb-6 h-72 w-full rounded-md object-cover"
            />
          )}
          <p className="text-xl">{post.content}</p>
        </CardContent>
        <CardFooter>
          <Engagement post={post} />
        </CardFooter>
      </Card>

      {isEditing && (
        <EditForm
          post={post}
          onSaved={(updatedPost) => {
            setPost(updatedPost);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}
