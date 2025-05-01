type Props = {
  title: string;
  date: string;
};

export default function PostCard({ title, date }: Props) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-md transition">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-500">{date}</p>
    </div>
  );
}