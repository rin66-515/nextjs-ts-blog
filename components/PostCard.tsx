type PostCardProps = {
  title: string;
  body: string;
};

export default function PostCard({ title, body }: PostCardProps) {
  return (
    <div className="border rounded p-4 mb-4 shadow">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{body}</p>
    </div>
  );
}
