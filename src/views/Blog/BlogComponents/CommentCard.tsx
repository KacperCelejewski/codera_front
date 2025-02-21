// Comment card component
import Comment from "../types/Comment";
function CommentCard({ comment }: { comment: Comment }) {
    return (
        <div className="comment-card">
            <div className="comment-card-header">
                <h3>{comment.name}</h3>
                <p>{comment.date}</p>
            </div>
            <p>{comment.content}</p>
        </div>
    );
}
export default CommentCard;