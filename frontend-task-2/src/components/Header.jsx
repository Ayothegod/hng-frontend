import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import menu from "../assets/Menu.svg";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { Search } from "lucide-react";
import Link from "next/link";
import useSWR from "swr";
import { useRouter } from "next/router";
import SearchBox from "./SearchBox";

const Header = () => {
  const router = useRouter();

  const [startFetching, setStartFetching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const SEARCH_URL = "https://api.themoviedb.org/3/search/movie";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // https://hngx-stage-two-henna.vercel.app/home
  const { data, error, isLoading, isRefetching, fetchStatus, isError } = useSWR(
    `${SEARCH_URL}?api_key=${API_KEY}&query=${searchTerm}`,
    fetcher
  )

  return (
    <div className="pt-4 px-2 sm:px-6 md:px-10 lg:px-20 w-full flex items-center gap-2 text-white justify-between relative">
      <Link href="/">
        <Image src={Logo} alt="Logo" />
      </Link>

      <div>
        <form>
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

          <div className="absolute bg-white max-h-64 left-4 right-4 md:left-10 w-[90vw] md:w-[30rem] top-20 text-black rounded overflow-y-auto">

          {isLoading || isRefetching 
          ? (
          fetchStatus !== 'idle' 
          ? (
            <main className="flex items-center justify-center">
            <div className=" animate-spin">
              <Loader2 />
            </div>
          </main>
          ) 
          : null
        ) 
        : data && data.results.length > 0 
        ? (
          <div className="flex flex-col gap-4 px-2 py-2">
            {data.results.map((movie) => (
              <SearchBox
                key={movie.id}
                id={movie?.id}
                title={movie.title}
                poster_path={movie.poster_path}
                release_date={movie.release_date}
                />
            ))}
          </div>
        ) 
        : isError 
        ? (
          <p className="text-center">
            Error Loading Movies
          </p>
        ) 
        : (
          searchTerm.length < 1 ?
          null : <p>no movie</p>
        )
        }

          </div>
        </form>
      </div>

      <div className="hidden sm:flex gap-4 ">
        <p className="text-lg text-white font-semibold">sign in</p>
        <Image src={menu} alt="menu" />
      </div>
    </div>
  );
};
{

}

export default Header;
