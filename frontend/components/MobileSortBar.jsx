import React from "react";
import { FaFilter } from "react-icons/fa6";
import { FaSortAmountDownAlt } from "react-icons/fa";
function MobileSortBar() {
  return (
    <div className="w-full flex justify-center gap-3">
      <div className="w-52 h-10 shadow-md rounded-full bg-gray-100 text-slate-600 cursor-pointer flex justify-between items-center px-5">
        <span>فیلتر</span>
        <FaFilter />
      </div>
      <div className="w-52 h-10 shadow-md rounded-full bg-gray-100 text-slate-600 cursor-pointer flex justify-between items-center px-5">
        <span>مرتب سازی</span>
        <FaSortAmountDownAlt />
      </div>
    </div>
  );
}

export default MobileSortBar;
