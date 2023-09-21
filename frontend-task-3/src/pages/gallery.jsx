import Button from "@/components/ui/Button";
import { imageData } from "@/lib/imageData";
import Image from "next/image";
import placehold from "../assets/placeholder.png";
import ImageBox from "@/components/ImageBox";
import { supabaseClient } from "@/lib/supabase";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [user, setUser] = useState({})
  const [displayData, setDisplayData] = useState([imageData])
  useEffect(() => {
    const user = async () => {
      const {data: { user },} = await supabaseClient.auth.getUser();
      setUser(user)
    };
    user()
  }, []);

  const signout = async () => {
    const { error: ErrorData } = await supabaseClient.auth.signOut();
    console.log(ErrorData);
  };
  console.log(displayData);
  const tagged = "forest"
  // const filtered = displayData.filter(data => data.tags?.includes(tagged))
  // console.log(filtered);
  // setDisplayData(filtered)
  // console.log(data);

  return (
    <main className="min-h-screen bg-gray-100">
      <main className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* header */}
        <header className="py-2 flex items-center justify-between">
          <p className="font-mono text-2xl md:text-4xl">Image Gallery</p>
          <div>
            <p className="font-semibold text-slate-800 underline text-lg">
              {user ? user?.email : "Sign in"}
            </p>
          </div>
        </header>

        {/* <button
        className="bg-purple-600 text-white p-2 rounded"
        onClick={signout}
      >
        logout
      </button> */}

        {/* search*/}
        <div className="flex flex-col gap-2 mt-4 ">
          <div className="space-y-2">
            <p className="text-slate-500 font-medium">Filter by tags</p>

            <div className="flex gap-4 overflow-x-auto">
              <Button>water</Button>
              <Button>wildlife</Button>
              <Button>space</Button>
              <Button>ice</Button>
              <Button>mountain</Button>
              <Button>forest</Button>
            </div>
          </div>

          <div className="">
            <input
              type="text"
              placeholder="Search images by tag"
              className="bg-transparent border border-slate-800 rounded px-4 py-2 md:py-2 md:px-6 w-full sm:w-96 focus:ring"
            />
          </div>
        </div>

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
        {imageData.slice(0, 10).map((data) => (
          <ImageBox key={data.id} data={data} />
        ))}
      </div> */}
      </main>
    </main>
  );
};

export default Gallery;
