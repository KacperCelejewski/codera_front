import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";

function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch("http://localhost:8000/blog/comments/comments");
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

    return (
        <div className="mt-10">
            <h1>Komentarze</h1>
            <ul>
                {comments.map((comment: { id: number; name: string; content: string }) => (
                    <CommentCard key={comment.id} comment={comment} />
                ))}
            </ul>
        </div>
    );
}

export default Comments;