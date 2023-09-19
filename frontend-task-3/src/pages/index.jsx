import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const user = false

  if(user) {
    return(
      <>
      Sign in to your account
      </>
    )
  }

  return (
    <main className="min-h-screen bg-gray-200">
      <main className="container max-w-6xl mx-auto px-4 md:px-8">
        <header className="py-2 flex items-center justify-between">
          <p className="font-mono text-2xl md:text-4xl">Image Gallery</p>
          <div>
            {/* <Image src={} alt="user image"/> */}
            <p className="font-semibold text-slate-800 underline text-lg">{user ? user?.email : "Sign in"}</p>
          </div>
        </header>

        
      </main>
    </main>
  );
}
