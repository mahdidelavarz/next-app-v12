import React from "react";

function CommentForm({comment , labelValue , isReplied}) {
  return (
    <div
      className={`${
        isReplied ? "flex flex-col gap-2 w-full text-sm font-bold" : "hidden"
      }`}
    >
      <label>{labelValue}{comment.writer?.name}</label>
      <textarea className={`border w-full px-4 py-1`} />
      <button className="w-40 py-2 bg-slate-200 outline-none shadow-md text-red-500">Send</button>
    </div>
  );
}

export default CommentForm;
