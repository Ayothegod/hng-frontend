import Image from "next/image";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import favorite from "../assets/Favorite.svg";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const bannerPath = "http://image.tmdb.org/t/p/w500";
  const year = new Date(movie?.release_date).getFullYear();
  // console.log(movie);
  const popularity = Math.floor(movie?.popularity);

  const [heart, setHeart] = useState(true)

  //   Action          28
  //   Adventure       12
  //   Animation       16
  //   Comedy          35
  //   Crime           80
  //   Documentary     99
  //   Drama           18
  //   Family          10751
  //   Fantasy         14
  //   History         36
  //   Horror          27
  //   Music           10402
  //   Mystery         9648
  //   Romance         10749
  //   Science Fiction 878
  //   TV Movie        10770
  //   Thriller        53
  //   War             10752
  //   Western         37

  return (
    <div className="relative">
      <Image
        src={`${bannerPath}/${movie?.poster_path}`}
        alt={movie?.title}
        height={300}
        width={300}
        />
      {heart ? <Image src={favorite} alt="imdb" className="md:w-12 absolute top-2 right-4 sm:right-2" /> : <Heart className="md:w-12 absolute top-2 right-4 sm:right-2 bg-red-600 rounded-full w-8 h-8 p-2 text-white" />}

      <Link href={`/movies/${movie?.id}`}>
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-slate-500 font-medium">USA, {year}</p>
          <p className="font-bold text-xl">{movie?.title}</p>
          <div className="flex justify-between">
            <div className="flex text-slate-600 font-medium gap-2">
              <Image src={imdb} alt="imdb" className="" />
              <p>{movie?.vote_average * 10}.0 / 100</p>
            </div>
            <div className="flex mr-4 sm:mr-0 gap-2 text-slate-600 font-medium">
              <Image src={tomato} alt="imdb" className="" />
              <p>{popularity}%</p>
            </div>
          </div>
          <div className="flex text-slate-500 text-sm gap-2">
            {movie?.genre_ids.map((id) => (
              <p key={id}>{id}</p>
            ))}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
