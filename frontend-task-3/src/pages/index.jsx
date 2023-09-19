import Button from "@/components/ui/Button";
import { imageData } from "@/lib/imageData";
import Image from "next/image";
import placehold from "../assets/placeholder.png";
import ImageBox from "@/components/ImageBox";

export default function Home() {
  // console.log(imageData[0].imgUrl);
  const user = false;
  // const url = imageData[5].imgUrl;

  if (user) {
    return (
      <main className="h-screen bg-gray-100">
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col gap-4 px-4">
            <p className="font-semibold text-2xl">Sign-in to access the gallery.</p>

            <form className="space-y-4">
              <input type="text" placeholder="email address..." className="w-full bg-transparent border-2 border-slate-800 rounded px-2 py-2 md:py-2 md:px-4 focus:ring" />
              <input type="password" placeholder="password..." className="w-full bg-transparent border-2 border-slate-800 rounded px-2 py-2 md:py-2 md:px-4 focus:ring"/>

              <button className="w-full bg-slate-800 border-none rounded px-2 py-2 md:py-2 md:px-4 text-white font-medium text-lg">get access</button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <main className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* header */}
        <header className="py-2 flex items-center justify-between">
          <p className="font-mono text-2xl md:text-4xl">Image Gallery</p>
          <div>
            {/* {!url ? "loading" : <Image src={url}   alt="user image" placeholder="blur"
            className="h-20 w-20 rounded"/>} */}
            <p className="font-semibold text-slate-800 underline text-lg">
              {user ? user?.email : "Sign in"}
            </p>
          </div>
        </header>

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {imageData.slice(0, 10).map((data) => (
            <ImageBox key={data.id} data={data} />
          ))}
        </div>
      </main>
    </main>
  );
}
