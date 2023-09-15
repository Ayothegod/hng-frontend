import Image from "next/image";
import Header from "../Header";

const Body = ({ data }) => {
  // console.log(data);
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
        </div>
      </div>
      Hello Details
    </div>
  );
};

export default Body;
