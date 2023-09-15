import Image from "next/image";

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
      </div>
    </div>
  );
};

export default Body;
