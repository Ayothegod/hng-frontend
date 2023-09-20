import Button from "@/components/ui/Button";
import { imageData } from "@/lib/imageData";
import Image from "next/image";
import placehold from "../assets/placeholder.png";
import ImageBox from "@/components/ImageBox";
import Signin from "@/components/Signin";
import {  SignOutButton, useUser, useAuth } from "@clerk/nextjs";

export default function Home() {
    const {  isSignedIn, user } = useUser()
  const {  userId, sessionId, getToken } = useAuth()

    // console.log(userId, sessionId);
    // console.log(isSignedIn, user);

  if (!isSignedIn) {
    return (
      <main className="h-screen bg-gray-100">
        <Signin/>
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
              {user ? user?.primaryEmailAddress?.emailAddress : "Sign in"}
            </p>
            <SignOutButton/>
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

        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {imageData.slice(0, 10).map((data) => (
            <ImageBox key={data.id} data={data} />
          ))}
        </div> */}
      </main>
    </main>
  );
}
