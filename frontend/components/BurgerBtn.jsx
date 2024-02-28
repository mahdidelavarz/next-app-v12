"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";

function BurgerBtn() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {show ? (
        <ImCross
          className="text-2xl text-slate-700"
          onClick={() => setShow(false)}
        />
      ) : (
        <RxHamburgerMenu
          className="text-3xl text-slate-700"
          onClick={() => setShow(true)}
        />
      )}

      {show && (
        <div className="w-72 h-[70vh] bg-gray-200 absolute top-20 right-0 rounded-lg">
          <ul className="w-full h-auto flex flex-col py-4 px-2 gap-2">
            <Link href="./">
              <li className="w-full py-2 px-4 hover:bg-gray-300 cursor-pointer duration-300 rounded-lg text-slate-600 hover:text-slate-900">
                home
              </li>
            </Link>
            <Link href="/courses">
              <li className="w-full py-2 px-4 hover:bg-gray-300 cursor-pointer duration-300 rounded-lg text-slate-600 hover:text-slate-900">
                courser
              </li>
            </Link>
            <Link href="/blogs">
              <li className="w-full py-2 px-4 hover:bg-gray-300 cursor-pointer duration-300 rounded-lg text-slate-600 hover:text-slate-900">
                blogs
              </li>
            </Link>
            <Link href="/about-us">
              <li className="w-full py-2 px-4 hover:bg-gray-300 cursor-pointer duration-300 rounded-lg text-slate-600 hover:text-slate-900">
                about us
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerBtn;
