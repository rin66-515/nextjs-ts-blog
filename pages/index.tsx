import PostCard from "../components/PostCard";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto mt-10">
      <PostCard
        title="My First Post"
        body="This is an example post using TypeScript."
      />
    </main>
  );
}
