import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between w-full px-8 min-h-fit pt-3">
      <div className="flex items-center cursor-pointer">
        <Image
          alt=""
          src="/assets/logo.png"
          width="30"
          height="30"
          className="mx-2"
        />
        <p className="font-medium">Panaverse.Inc</p>
      </div>
      <div className="flex max-[800px]:hidden">
        <span className="font-medium mx-4 cursor-pointer">Product</span>
        <span className="font-medium mx-4 cursor-pointer">Solution</span>
        <span className="font-medium mx-4 cursor-pointer">Pricing</span>
        <span className="font-medium mx-4 cursor-pointer">Blog</span>
      </div>
      <div className="flex text">
        <button className="px-4 py-2 bg-white shadow-md rounded-md mx-5 uppercase text-xs">
          Sign in
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white shadow-md rounded-md uppercase text-xs">
          Sign up
        </button>
      </div>
    </header>
  );
}

export default Header;
