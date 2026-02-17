import { notFound } from "next/navigation";
import { posts, users } from "@/lib/blog-data";
import type { Post } from "@/lib/blog-data";
import Image from "next/image";
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Engagement from "@/components/Engagement";
import Profile from '@/components/profile';
type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const postId = Number(id);

  const post: Post | undefined = posts.find((p) => p.id === postId);
  if (!post) notFound();

  const userById = new Map(users.map((u) => [u.id, u]));
  const user = userById.get(post.userId);
  if (!user) notFound();
  return (
    <div>
       <Link href={`/profile/${user.id}`}>
          <div className='mx-10'><Profile user={user}/></div>
        </Link>
      
      
    <Card className="bg-slate-950 text-white">
      <CardHeader>
        <CardTitle className='text-3xl extrabold'>{post.title}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-10 p-10 text-md md:text-2xl md:flex-row'>
        {post.image && <Image
          src={post?.image as string}
          alt={post.title}
          width={1200}
          height={630}
          className="mb-6 h-72 w-full rounded-md object-cover"
        />}
        <p className='text-xl '>{post.body}</p>
      </CardContent>
      <CardFooter>
        <Engagement
         post={post}
         toggleClick={true}
        />
      </CardFooter>
       </Card>
      <section className="w-full flex flex-col gap-5 justify-center items-center mt-0">
        <br />
       
      </section>
    </div>
  );
}
