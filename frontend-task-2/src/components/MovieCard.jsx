import Image from "next/image";
import imdb from "../assets/imdb.svg"
import tomato from "../assets/tomato.svg"
import Link from "next/link";
// src\assets\imdb.svg

const MovieCard = ({ movie }) => {
  const bannerPath = "http://image.tmdb.org/t/p/w500";
  const year = new Date(movie?.release_date).getFullYear()
  console.log(movie);

  const rating = [78, 49, 90, 60, 70, 80, 90, 99, 56,91,79, 60, 89, 56];
  const ratingValue = rating[Math.floor(Math.random() * rating.length)];

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
    <div>
      <Image
        src={`${bannerPath}/${movie?.poster_path}`}
        alt={movie?.title}
        height={300}
        width={300}
      />
      <Link href={`/movies/${movie?.id}`}>
      <div className="mt-2 flex flex-col gap-2">
        <p className="text-slate-500 font-medium">USA, {year}</p>
        <p className="font-bold text-xl">{movie?.title}</p>
        <div className="flex justify-between">
          <div className="flex text-slate-600 font-medium gap-2">
            <Image src={imdb} alt="imdb" className="md:w-12"/>
            <p>{movie?.vote_average  * 10}.0 / 100</p>
          </div>
          <div className="flex mr-4 sm:mr-0 gap-2 text-slate-600 font-medium">
          <Image src={tomato} alt="imdb" className="md:w-12"/>
            <p>{ratingValue}%</p>
          </div>
        </div>
        <div className="flex text-slate-500 text-sm gap-2">
          {
            movie?.genre_ids.map(id => (
              <p key={id}>{id}</p>
            ))
          }
        </div>
      </div>
      </Link>
    </div>
  );
};

export default MovieCard;
