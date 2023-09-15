import useSWR from "swr";
import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

const Featured = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/top_rated?api_key=${API_KEY}`,
    fetcher
  );
  // console.log(data && data.results.slice(0,10));

  return (
    <div className="mt-10 md:mt-16 mx-6 sm:mx-16 md:mx-20">
      <div className="flex items-center justify-between ">
        <p className="font-semibold text-2xl md:text-4xl">Featured Movie</p>
        <p className="flex item-center text-red-500 font-semibold gap-1">
          See more <ChevronRight />
        </p>
      </div>

      <div className="mt-4 md:mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {data &&
            data.results
              .slice(0, 10)
              .map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default Featured;
