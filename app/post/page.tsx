import { getPosts } from "@/lib/blog-data";
import PostListClient from "@/components/post-list-client";

export default async function Page() {
  const posts = await getPosts();
  return <PostListClient initialPosts={posts} />;
}
