import React from "react";
import { BsSortDownAlt } from "react-icons/bs";
function SortRow() {
  return (
    <div className="w-full flex items-center px-6 h-16 bg-slate-100 rounded-full">
      <ul className="flex gap-8 text-slate-600">
        <div className="flex gap-2 py-3">
          <BsSortDownAlt className="text-2xl text-rose-500" />
          <span>مرتب سازی :</span>
        </div>
        <li className="text-rose-500 border-b-2 border-rose-500 py-3 cursor-pointer">پربازدید ترین</li>
        <li className="py-3 cursor-pointer">پربازدید ترین</li>
        <li className="py-3 cursor-pointer">پربازدید ترین</li>
        <li className="py-3 cursor-pointer">پربازدید ترین</li>
      </ul>
    </div>
  );
}

export default SortRow;
