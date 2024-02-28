import React from "react";
import { LuMessagesSquare } from "react-icons/lu";
import { FcLike } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import { IoMdClock } from "react-icons/io";
import Link from "next/link";
function PostList({ blogsData }) {
  return (
    <section className="w-full h-full grid grid-cols-6 gap-6 px-3">
      {blogsData.map((item) => {
        return (
          <div
            key={item._id}
            className="min-h-[60vh] max-h-[60vh] col-span-6 md:col-span-3 lg:col-span-2 bg-gray-100 shadow-md rounded-2xl relative"
          >
            <div className="max-h-60">
              <img
                src={item.coverImage}
                alt="next"
                className="max-h-60 rounded-t-2xl w-full h-full object-center object-cover"
              />
            </div>
            <div className="w-full h-auto p-2 text-slate-600">
              <Link href={`/posts/${item.hashId}/${item.slug}`}>
                <h2 className="text-lg font-bold py-3">{item.title}</h2>
              </Link>
              <div className="w-full flex justify-between mt-2">
                <div className="flex gap-1 items-center">
                  <span className="w-10 h-10 rounded-full shadow-md p-1">
                    <img
                      src={item.coverImage}
                      alt="profile"
                      className="rounded-full"
                    />
                  </span>
                  <span className="text-sm">{item.author.name}</span>
                </div>
                <div className="px-4 py-1 bg-gray-200 rounded-xl text-xs shadow-md flex items-center">
                  {item.category.title}
                </div>
              </div>
              <div className="w-full p-4  absolute bottom-0 right-0 flex justify-between">
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1 items-center shadow-md p-1 rounded-lg cursor-pointer">
                    <LuMessagesSquare />
                    <span className="text-xs">{item.comments.length}</span>
                  </div>
                  <div className="flex gap-1 items-center shadow-md p-1 rounded-lg cursor-pointer">
                    <FcLike />
                    <span className="text-xs">{item.likesCount}</span>
                  </div>
                  <div className="shadow-md p-1 rounded-lg cursor-pointer">
                    <FaBookmark />
                  </div>
                </div>
                <div className="flex gap-1 items-center ">
                  <IoMdClock />
                  <span className="text-xs whitespace-nowrap">
                    زمان مطالعه : {item.readingTime} دقیقه
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default PostList;
