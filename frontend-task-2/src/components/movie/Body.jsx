import Image from "next/image";
import Header from "../Header";
import play from "../../assets/Play.svg";
import List from "../../assets/List.svg";
import Ticket from "../../assets/Two Tickets.svg";
import Footer from "../Footer";
import Link from "next/link";

const Body = ({ data }) => {
  const bannerPath = "https://image.tmdb.org/t/p/original";
  const url = bannerPath + data?.backdrop_path;
  console.log(data);

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
            <Image
              src={play}
              alt="play-icon"
              className="h-14 w-14 md:h-20 md:w-20"
            />
            <p className="text-white font-medium sm:text-lg text-2xl">
              Watch Trailer
            </p>
          </div>
        </div>
      </div>

      <div className="py-4 px-4 sm:py-10 sm:px-10 md:px-20 md:pt-20">
        {/* top row */}
        <div className="">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <p className="text-2xl font-bold">{data?.title} . </p>
            <p className="text-lg font-medium text-slate-500">
              Runtime (in minutes): {data?.runtime} .{" "}
            </p>
            <p className="text-lg font-medium text-slate-500">
              Release Date in (UTC): <span>{data?.release_date} . </span>
            </p>
          </div>
        </div>

        {/* overview and two buttons */}
        <div className="mt-4 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm md:text-base font-medium text-slate-900 md:max-w-[80%]">
            {data?.overview}
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-4">
            <button className="bg-red-700 px-4 py-2 text-white font-medium rounded md:w-48 ">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 md:gap-0"
              >
                <Image src={Ticket} alt="ticket" className="" />
                See Showtimes
              </Link>
            </button>

            <button className="border border-red-700 bg-red-700/40 px-4 py-2 text-black font-medium rounded md:w-48">
              <Link
                href="/"
                className="flex items-center justify-center gap-2 md:gap-0"
              >
                <Image src={List} alt="list" className="" />
                More watch options
              </Link>
            </button>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Body;
