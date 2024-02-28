import React from "react";
import axios from "axios";
function MobileCategories({ categories }) {
  return (
    <div className="w-full flex items-center">
      <div className="w-full h-16 flex gap-5 overflow-x-auto pb-5 justify-center text-slate-600">
        {categories.map((category) => {
          return (
            <div className=" px-3 py-1 rounded-md shadow-md flex items-center cursor-pointer" key={category._id}>
              {category.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MobileCategories;
