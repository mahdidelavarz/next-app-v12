import React, { useState } from "react";
import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";
import ReplyComment from "./ReplyComment";

function PostComments({ post }) {
  const [comment, setComment] = useState("");
  return (
    <div>
      <h2>نظرات</h2>
      {post.comments.map((comment) => {
        if (!comment.responseTo && comment.status === 2) {
          return (
            <div key={comment._id}>
              <SingleComment comment={comment} />
              <ReplyComment
                comments={post.comments}
                parentCommentId={comment._id}
              />
            </div>
          );
        }
      })}

      {/* comment form */}
      <CommentForm
        comment={comment}
        setComment={setComment}
        labelValue={"send a new comment"}
        isReplied={true}
      />
    </div>
  );
}

export default PostComments;
