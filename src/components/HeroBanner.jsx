import React from "react";
import Header from "./Header";
import useSWR from "swr";

const HeroBanner = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    // const bannerPath = "http://image.tmdb.org/t/p/w500"
  const bannerPath = "https://image.tmdb.org/t/p/original"

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/top_rated?api_key=${API_KEY}`,
    fetcher
  );
  const response =
    data?.results[Math.floor(Math.random() * data?.results.length)];
  console.log(response);

  return (
    <div>
      <div
        style={{ "--image-url": `url(${bannerPath}/${response?.poster_path})` }}
        className="bg-[image:var(--image-url)] w-[100vw] h-[80vh] sm:h-[90vh] md:h-[100vh] object-cover object-center bg-no-repeat"
      >
        <div className="backdrop-brightness-50 h-full">

        <Header/>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
