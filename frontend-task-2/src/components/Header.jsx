import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import menu from "../assets/Menu.svg";
import Image from "next/image";
import { Search } from "lucide-react";
import Link from "next/link";
// https://api.themoviedb.org/3/search/movie?api_key=9b0b141b44e2b1a77e4965a9ac513ca4&query=amo
const Header = () => {
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="pt-4 px-2 sm:px-6 md:px-10 lg:px-20 w-full flex items-center gap-2 text-white justify-between">
       
        <Link href="/">
          <Image src={Logo} alt="Logo" />
        </Link>
      <div>
        <div className=" relative">
          <input
            type="text"
            value={searchTerm}
            placeholder="What do you want to watch?"
            className=" border border-slate-200 rounded px-1 py-1 sm:px-2 sm:py-2 bg-transparent sm:w-64 md:w-96 placeholder:text-xs sm:placeholder:text-base placeholder:text-white"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute right-2 top-1 sm:top-2 text-white" />
        </div>
      </div>
      <div className="hidden sm:flex gap-4 ">
        <p className="text-lg text-white font-semibold">sign in</p>
        <Image src={menu} alt="menu" />
      </div>
    </div>
  );
};

export default Header;
