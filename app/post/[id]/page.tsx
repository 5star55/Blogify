import { notFound } from "next/navigation";
import { getSpecificPost } from "@/lib/blog-data";
import type { Post } from "@/lib/blog-data";
import PostDetailClient from "@/components/post-detail-client";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const post: Post = await getSpecificPost(id);
  if (!post) notFound();

  return <PostDetailClient initialPost={post} />;
}
