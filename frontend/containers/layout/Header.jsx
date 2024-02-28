import React from "react";
import BurgerBtn from "../../components/BurgerBtn";
import Link from "next/link";

function Header() {
  return (
    <div className="w-full h-20 flex justify-between items-center px-6 fixed top-0 right-0 bg-gray-100 shadow-md shadow-gray-300 z-50">
      <div className="flex justify-between md:hidden w-full">
        <BurgerBtn />
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl shadow-md border">
            Sing In
          </button>
          <button className="px-4 py-2 rounded-xl shadow-md border">
            Sing Up
          </button>
        </div>
      </div>
      <ul className="md:flex gap-8 hidden">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/blogs">
          <li>Blogs</li>
        </Link>
      </ul>
      <div className="md:flex gap-3 hidden">
        <button className="px-4 py-2 rounded-xl shadow-md border">
          Sing In
        </button>
        <button className="px-4 py-2 rounded-xl shadow-md border">
          Sing Up
        </button>
      </div>
    </div>
  );
}

export default Header;
