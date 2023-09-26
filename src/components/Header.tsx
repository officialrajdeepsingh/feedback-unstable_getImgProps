import Link from "next/link";
import React from "react";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
    
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Logo />
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 text-black dark:text-white hover:text-gray-300">Home</Link>
          <Link href={"/"} className="mr-5 text-black dark:text-white hover:text-gray-300">About</Link>
        </nav>
    </header>
  );
};
