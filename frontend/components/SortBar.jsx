import React from "react";
import Link from "next/link";
function SortBar({ categories }) {
  return (
    <div className="w-full h-auto flex flex-col items-end px-4">
      <div className="w-full h-14 bg-slate-200 rounded-t-2xl flex justify-center items-center text-slate-600">
        <span> دسته بندی و مقالات</span>
      </div>
      <div className="w-full h-[60vh] bg-slate-100 border-t text-slate-600">
        <ul className="flex flex-col gap-2">
          {categories.map((category) => {
            return (
              <Link href={`/blogs/${category.englishTitle}`} key={category._id}>
                <li className="w-full flex px-3 py-2 hover:bg-gray-300 duration-300">
                  {category.title}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SortBar;
