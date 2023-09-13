import useSWR from "swr";
import {Loader2} from "lucide-react"
import HeroBanner from "@/components/HeroBanner";

export default function Home() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/top_rated?api_key=${API_KEY}`,
    fetcher
  );
  // console.log(data);

  if (isLoading) return (
    <main className="h-screen flex items-center justify-center">
      <div className=" animate-spin"><Loader2 /></div>
    </main>
  )

  return (
    <>
      <main>
      <HeroBanner/>
      </main>
    </>
  );
}

// https://api.themoviedb.org/3/movie/top_rated?api_key=9b0b141b44e2b1a77e4965a9ac513ca4
