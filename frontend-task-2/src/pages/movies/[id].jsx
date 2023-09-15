import Body from "@/components/movie/Body";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/router";
import useSWR from "swr";

const MoviePage = () => {
  const router = useRouter();
  const movieId = router.query.id;

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/${movieId}?api_key=${API_KEY}`,
    fetcher
  );

  if (error) {
    return <p>Error, go back to home page</p>;
  }

  if (isLoading)
    return (
      <main className="h-screen flex items-center justify-center">
        <div className=" animate-spin">
          <Loader2 />
        </div>
      </main>
    );

  return (
    <div>
      <div className="w-screen">
        <Body data={data} />
      </div>
    </div>
  );
};

export default MoviePage;
