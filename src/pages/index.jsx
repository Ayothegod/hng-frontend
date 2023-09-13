import useSWR from "swr";

export default function Home() {
  const BASE_URL = process.env.API_KEY
  console.log(process.env.API_KEY)
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR('', fetcher)
  return (
    <>
      <main>
        Hello builders
      </main>
    </>
  );
}
