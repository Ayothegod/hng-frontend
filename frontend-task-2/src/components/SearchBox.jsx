import Image from "next/image";
import Link from "next/link";


const SearchBox = ({id, title, poster_path, release_date}) => {
  const bannerPath = "http://image.tmdb.org/t/p/w500";

  console.log(id, title, poster_path, release_date);
  return (
    <Link href={`/movies/${id}`}>
    <div className="flex gap-4 items-center">
      <div className="relative h-24 w-24 rounded overflow-hidden">
        <Image src={`${bannerPath}${poster_path}`} alt={title} fill className="object-cover"/>
      </div>
      <div className="flex flex-col gap-4">
        <p className="font-semibold text-lg">{title}</p>
        <p className="text-slate-600">{release_date}</p>
      </div>
    </div>
    </Link>
  )
}

export default SearchBox