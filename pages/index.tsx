import { getAllPosts } from "@/lib/posts";
import PostCard from "../components/PostCard";

export default function Home({ posts }: { posts: any[] }) {
  return (
    <main className="max-w-2xl mx-auto mt-10 space-y-4">
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
