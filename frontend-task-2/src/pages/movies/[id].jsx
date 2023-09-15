import Sidebar from "@/components/movie/Sidebar"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/router"
import { useState } from "react"
import useSWR from "swr"

const MoviePage = () => {
  const router = useRouter()
  const movieId = router.query.id

  const [openSidebar, setOpenSidebar] = useState(false)

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  // const imgPath = "http://image.tmdb.org/t/p/w500"

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    `${BASE_URL}/${movieId}?api_key=${API_KEY}`,
    fetcher
  );
  // console.log(data);
  if(error){
    return <p>Error, go back to home page</p>
  }
  if (isLoading) return (
    <main className="h-screen flex items-center justify-center">
      <div className=" animate-spin"><Loader2 /></div>
    </main>
  )

  return (
    <div className="flex">
      {openSidebar ? <Sidebar /> : null}
      <div>
      MoviePage {router.query.id}
      </div>
    </div>
  )
}

export default MoviePage