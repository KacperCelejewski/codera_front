/** @format */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Post } from "../../types/Post"; // Ensure the path is correct

import CommentCard from "./BlogComponents/CommentCard";
import Comments from "./BlogComponents/CommentsSection";

const comments: Comment[] = [
  {
    id: 1,
    postId: 1,
    date: "2021-10-01",
    name: "John Doe",
    content: "This is a comment",
    author: 1,
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  console.log("Slug z URL:", slug);

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/blog/get_post/${slug}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Dane z API:", data);
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchData();
  }, [slug]);

  if (!post) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Post nie znaleziony
      </h1>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-techGreen border-b-4 border-techGreen">
        {post.title}
      </h1>
      <p className="text-white mt-4">{post.content}</p>
      <Comments />
    </div>
  );
};

export default BlogPost;
