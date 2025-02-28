/** @format */

import { use, useEffect, useState } from "react";
import CommentCard from "./CommentCard";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useNavigate } from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
function Comments() {
  const [comments, setComments] = useState([]);
  const length = comments.length;
  const [visibleCount, setVisibleCount] = useState(4);
  const showMore = () => {
    setVisibleCount(length); // Pokazuje wszystkie
  };

  const showLess = () => {
    setVisibleCount(4); // Wraca do 4
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/blog/comments/comments"
        );
        if (!response.ok) {
          throw new Error(`Błąd: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        setComments(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchComments();
  }, []);
  const AuthHeader = useAuthHeader();
  const addComment = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/blog/comments/create_comment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthHeader,
          },
          body: JSON.stringify({
            name: "John Doe",
            content: "This is a comment",
            author: 1,
            post: 1,
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`Błąd: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  const isAuthenitacted = useIsAuthenticated();
  const navigate = useNavigate();
  const signIn = () => {
    navigate("/login");
  };
  if (!isAuthenitacted) {
    return (
      <div className="mt-10">
        <h1>Komentarze</h1>

        <ul>
          {comments.slice(0, visibleCount).map((comment: Comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </ul>
        <p>Musisz być zalogowany, aby dodać komentarz</p>
        <button onClick={signIn}>Zaloguj się</button>
      </div>
    );
  } else {
    return (
      <div className="mt-10">
        <h1 className="text-white text-2xl font-bold">Komentarze</h1>

        <ul className="grid grid-cols-2 gap-x-32 p-4">
          {comments
            .slice(0, visibleCount)
            .map((comment: { id: number; name: string; content: string }) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
        </ul>
        <div className="flex justify-center flex-col items-center gap-4">
          {visibleCount < comments.length ? (
            <button
              onClick={showMore}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Pokaż więcej
            </button>
          ) : (
            <button
              onClick={showLess}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Pokaż mniej
            </button>
          )}
          <button className="text-white" onClick={addComment}>
            Dodaj komentarz
          </button>
        </div>
      </div>
    );
  }
}

export default Comments;
