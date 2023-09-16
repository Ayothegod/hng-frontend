import Image from "next/image";
import imdb from "../assets/imdb.svg";
import tomato from "../assets/tomato.svg";
import favorite from "../assets/Favorite.svg";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useState } from "react";

const MovieCard = ({ movie }) => {
  const bannerPath = "http://image.tmdb.org/t/p/w500";
  const popularity = Math.floor(movie?.popularity);

  const [heart, setHeart] = useState(true);
  // console.log("User");

  return (
    <div className="relative" data-testid="movie-card">
      <Link href={`/movies/${movie?.id}`}>
        <Image
          data-testid="movie-poster"
          src={`${bannerPath}/${movie?.poster_path}`}
          alt={movie?.title}
          height={300}
          width={300}
        />
        {heart ? (
          <Image
            src={favorite}
            alt="imdb"
            className=" absolute top-2 right-4 sm:right-2"
          />
        ) : (
          <Heart className=" absolute top-2 right-4 sm:right-2 bg-red-600 rounded-full p-2 text-white" />
        )}

        <div className="mt-2 flex flex-col gap-2">
          <p className="font-bold text-xl" data-testid="movie-title">
            {movie?.title}
          </p>
          <p
            className="text-slate-500 font-medium"
            data-testid="movie-release-date"
          >
            {movie?.release_date}
          </p>
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
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
