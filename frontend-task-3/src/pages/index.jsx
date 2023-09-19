// import Image from "next/image";

export default function Home() {
  const user = false;

  if (user) {
    return <>Sign in to your account</>;
  }

  return (
    <main className="min-h-screen bg-gray-100">
      <main className="container max-w-6xl mx-auto px-4 md:px-8">
        {/* header */}
        <header className="py-2 flex items-center justify-between">
          <p className="font-mono text-2xl md:text-4xl">Image Gallery</p>
          <div>
            {/* <Image src={} alt="user image"/> */}
            <p className="font-semibold text-slate-800 underline text-lg">
              {user ? user?.email : "Sign in"}
            </p>
          </div>
        </header>

        {/* search*/}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-slate-500 font-medium">Search by tags</p>

            <div className="">
            <button className="bg-slate-800 text-white font-semibold rounded py-1 px-2 md:py-2 md:px-6 md:text-lg">water</button>
            </div>

          </div>
          <div>
            <input type="text" placeholder="Search images by tag" className="bg-transparent border border-slate-800 rounded px-4 py-2 md:py-2 md:px-6" />
          </div>
        </div>
      </main>
    </main>
  );
}
