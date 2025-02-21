import { Link } from "react-router-dom";
import { Post } from "../../types/Post";

export default function PostCard({ post }: { post: Post }) {
    console.log(post.image);
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden transition-transform transform hover:scale-105 duration-300">

      <div
        className="h-56 bg-cover bg-center p-4 flex items-end"
        style={{ backgroundImage: `url(${post.image})` }}
      >``
        <h1 className="text-2xl font-bold text-white bg-black/60 px-3 py-1 rounded-md">
          {post.title}
        </h1>
      </div>


      <div className="p-6">
        <h1 className="text-xl font-bold text-gray-900">{post.title}</h1>
        <p className="mt-2 text-gray-600 line-clamp-3">{post.excerpt}</p>

        <div className="flex justify-between items-center mt-4">
          <Link to={`/blog/${post.slug}`} className="text-blue-600 hover:underline font-medium">
            Czytaj więcej
          </Link>
          <div className="flex items-center space-x-3">
            <img
              src={post.image}
              alt="Autor"
              className="w-10 h-10 object-cover rounded-full border-2 border-gray-300"
            />
            <h1 className="text-gray-700 font-semibold">{post.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
