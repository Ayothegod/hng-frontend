import Image from "next/image";

const MovieCard = ({ movie }) => {
  const bannerPath = "http://image.tmdb.org/t/p/w500";
  console.log(movie);

  return (
    <div>
      <Image
        src={`${bannerPath}/${movie?.poster_path}`}
        alt={movie?.title}
        //         width={0}
        //   height={0}
        height={300}
        width={300}
      />
    </div>
  );
};

export default MovieCard;
