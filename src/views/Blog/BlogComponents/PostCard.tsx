/** @format */

import { Link } from "react-router-dom";
import { Post } from "../../types/Post";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="p-5 m-5 border-2 border-white bg-slate-900 shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <div className="p-6">
        <h1 className="text-xl font-bold text-techGreen">{post.title}</h1>
        <p className="mt-2 text-white line-clamp-3">{post.excerpt}</p>

        <div className="flex justify-between items-center mt-4">
          <Link
            to={`/blog/${post.slug}`}
            className="text-blue-600 hover:underline font-medium"
          >
            Czytaj więcej
          </Link>
          <div className="flex items-center space-x-3">
            <img
              src="public/sample.jpg"
              alt="Autor"
              className="w-10 h-10 object-cover rounded-full border-2 border-gray-300"
            />
            <h1 className="text-techGreen font-semibold">{post.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
