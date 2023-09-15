import Header from "./Header";
import useSWR from "swr";
import tomato from "../assets/tomato.svg";
import imdb from "../assets/imdb.svg";
import Play from "../assets/Play.svg";
import Image from "next/image";

const HeroBanner = () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const bannerPath = "https://image.tmdb.org/t/p/original";

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/top_rated?api_key=${API_KEY}`,
    fetcher
  );
  
  const response =
    data?.results[Math.floor(Math.random() * data?.results.length)];
  const popularity = Math.floor(response?.popularity);

  return (
    <div>
      <div className="relative h-[90vh] md:h-[100vh] w-full">
        <Image
          src={`${bannerPath}/${response?.poster_path}`}
          alt="bannerImage"
          fill
          className="object-cover object-center"
        />
        <div className="backdrop-brightness-50 h-full">
          <Header />

          <div>
            <div className="text-white mt-24 md:mt-32 px-4 sm:px-6 md:px-10 lg:px-20 flex flex-col gap-4">
              <div>
                <p className="text-4xl font-mono">{response?.title}</p>
              </div>
              <div className="flex items-center gap-8">
                <div className="flex gap-2">
                  <Image src={imdb} alt="imdb" />
                  <p className="text-sm">{popularity} / 100 </p>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={tomato} alt="tomato" />

                  <p className="text-sm">{response?.vote_average * 10} %</p>
                </div>
              </div>
              <div className="md:w-1/2">
                <p>{response?.overview}</p>
              </div>
              <div>
                <button className="bg-red-700 text-xs md:text-sm font-semibold px-4 rounded py-2 flex items-center gap-1">
                  <Image src={Play} alt="play" />
                  WATCH TRAILER
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
