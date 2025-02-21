import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Post } from "../../types/Post"; // Ensure the path is correct
import { posts } from "../../data/posts"; // Ensure the path is correct
import CommentCard from "./BlogComponents/CommentCard";
import Comments from "./BlogComponents/CommentsSection";


const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    date: "2021-10-01",
    name: "John Doe",
    email: "sample@gmail.com",
    content: "This is a comment",
    author: "Author Name",
  },
];

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
      

  {post.image && (
    <img
      src={post.image}
      alt={post.title}
      className="mt-6 w-full h-64 object-cover"
    />
  )}




  




  <h2 className="text-xl font-semibold mt-6">Komentarze</h2>
<Comments />
    

        
      </div>
    
  );
};

export default BlogPost;
