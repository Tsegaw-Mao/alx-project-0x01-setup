// basic post card component
import React from 'react';
import Link from 'next/link';
interface PostCardProps {
  title: string;
  description: string;
  link: string;
}
const PostCard: React.FC<PostCardProps> = ({ title, description, link }) => {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link href={link} className="text-blue-500 hover:underline">Read more</Link>
    </div>
  );
}