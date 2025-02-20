import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Post } from "../../types/Post"; // Upewnij się, że ścieżka jest poprawna
import { posts } from "../../data/posts"; // Upewnij się, że ścieżka jest poprawna

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>(); 
  console.log("Slug z URL:", slug);
  
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const foundPost = posts?.find((p: Post) => p.slug === slug);
    setPost(foundPost || null);
    console.log("Znaleziony post:", foundPost);
  }, [slug]);

  if (!post) {
    return <h1 className="text-center text-2xl font-bold mt-10">Post nie znaleziony</h1>;
  }




  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
      
      {/* Sprawdzenie, czy obrazek istnieje */}
   
        <img
          src={post.image}
          alt={post.title}
          className="mt-6 w-full h-64 object-cover"
        />
    

      <p className="mt-6 text-gray-700">{post.content}</p>
    </div>
  );
};

export default BlogPost;
