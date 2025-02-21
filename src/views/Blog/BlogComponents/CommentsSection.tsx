import { useEffect, useState } from "react";
import CommentCard from "./CommentCard";
// import Comment from "./types/Comment"; // Comment import is not used
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

    const addComment = async () => {
        try {
            const response = await fetch("http://localhost:8000/blog/comments/create_comment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: "John Doe",
                    content: "This is a comment",
                    author: 1,
                    post: 1,
                }),
            });
            if (!response.ok) {
                throw new Error(`Błąd: ${response.status} ${response.statusText}`);
                
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="mt-10">
            <h1>Komentarze</h1>
            <ul>
                {comments.map((comment: { id: number; name: string; content: string }) => (
                    <CommentCard key={comment.id} comment={comment} />
                    
                ))}
            </ul>
            <button onClick={addComment}>Dodaj komentarz</button>
        </div>
    );
}

export default Comments;