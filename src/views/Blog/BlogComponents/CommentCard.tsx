/** @format */

import Comment from "../types/Comment";
function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div className="font-poppins mb-10 bg-techGreen w-96  px-8 py-2 rounded-lg 2 break-words  shadow-xl">
      <div className="text-black flex justify-between bg-techGreen text-black bg-opacity-40 p-3 my-2  shadow-xl rounded-lg overflow-auto">
        <h3>{comment.author}</h3>
      </div>
      <p>{comment.content}</p>
      <p>{comment.created_at.slice(0, 10)}</p>
    </div>
  );
}
export default CommentCard;
