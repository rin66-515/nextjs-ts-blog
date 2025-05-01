import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import PostCard from "@/components/PostCard";

type Post = {
  id: string;
  title: string;
  date: string;
};

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <main className="max-w-2xl mx-auto mt-10 space-y-6">
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`} key={post.id}>
          <PostCard title={post.title} date={post.date} />
        </Link>
      ))}
    </main>
  );
}

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const id = filename.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      id,
      title: data.title,
      date: data.date,
    };
  });

  return {
    props: {
      posts,
    },
  };
}