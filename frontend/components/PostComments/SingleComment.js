import React, { useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import CommentForm from "./CommentForm";
function SingleComment({ comment }) {
  const [isReplied, setIsReplied] = useState(false);
  return (
    <div className="p-4 shadow-md my-4 rounded-xl border">
      <div className="flex gap-x-4 items-center">
        <FaRegCircleUser className="text-4xl" />
        <div className="flex flex-col">
          <span>{comment.writer?.name}</span>
          <span>{new Date(comment.createdAt).toLocaleDateString("fa-IR")}</span>
        </div>
      </div>
      <div className="mt-2 mr-10 p-2 rounded-md bg-slate-100 text-slate-700">
        {comment.content}
      </div>
      <div className="flex flex-col items-start px-10">
        <button
          className="m-2 text-rose-50 px-4 rounded-md text-sm py-1 bg-rose-500"
          onClick={() => setIsReplied(!isReplied)}
        >
          {!isReplied ? "پاسخ به .." : "بیخیال"}
        </button>
        <CommentForm comment={comment} labelValue={'درحال پاسخ به'} isReplied={isReplied}/>
      </div>
    </div>
  );
}

export default SingleComment;
