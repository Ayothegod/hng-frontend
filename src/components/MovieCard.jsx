import Image from "next/image";

const MovieCard = ({movie}) => {
    const bannerPath = "http://image.tmdb.org/t/p/w500"
    console.log(movie);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Image src={`${bannerPath}/${movie?.poster_path}`} alt={movie?.title} width={200} height={200}/>
        hello
    </div>
  )
}

export default MovieCard