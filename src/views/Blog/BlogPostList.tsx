/** @format */

import PostCard from "./BlogComponents/PostCard";
import MainLayout from "../../MainLayout";
import React from "react";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";

export default function Blog() {
  const [posts, setPosts] = React.useState([]);

  // const isAuthenitacted = useIsAuthenticated();

  React.useEffect(() => {
    // if(!isAuthenitacted){
    //    window.location.href = "/login";
    // }

    fetch("http://127.0.0.1:8000/blog/get_posts", {
      method: "GET",
    })
      .then((response) => {
        console.log(response);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <MainLayout>
      <div className=" p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post: any, index: number) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </MainLayout>
  );
}
