import useSWR from "swr";

export default function Home() {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/top_rated?api_key=${API_KEY}`,
    fetcher
  );
  console.log(data);

  if (isLoading) return <div>loading...</div>

  return (
    <>
      <main>Hello builders
        
      </main>
    </>
  );
}

// https://api.themoviedb.org/3/movie/top_rated?api_key=9b0b141b44e2b1a77e4965a9ac513ca4
