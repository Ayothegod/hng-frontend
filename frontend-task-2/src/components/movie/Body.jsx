import Image from "next/image";
import Header from "../Header";
import play from "../../assets/Play.svg";

const Body = ({ data }) => {
  console.log(data);
  const bannerPath = "https://image.tmdb.org/t/p/original";
  const url = bannerPath + data?.backdrop_path;

  return (
    <div>
      <div className="relative h-96 w-full rounded overflow-hidden">
        <Image
          src={url}
          alt="ImageUrl"
          className="object-cover object-center"
          fill
        />
        <div className="backdrop-brightness-100 h-full">
          <Header />

          <div className="flex flex-col gap-2 items-center justify-center h-full">
            <Image src={play} alt="play-icon" className="h-14 w-14 md:h-20 md:w-20" />
            <p className="text-white font-medium sm:text-lg text-2xl">Watch Trailer</p>
          </div>

        </div>
      </div>

      Hello Details
    </div>
  );
};

export default Body;
