import React from "react";
import SingleComment from "./SingleComment";

function ReplyComment({ comments, parentCommentId }) {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div key={comment._id} className="mr-8">
          <SingleComment comment={comment} />
          <ReplyComment comments={comments} parentCommentId={comment._id} />
        </div>
      )
    );
  });
}

export default ReplyComment;
