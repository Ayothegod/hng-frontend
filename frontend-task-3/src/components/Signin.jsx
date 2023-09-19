import { useSignIn } from "@clerk/nextjs";

const Signin = () => {
  const { isLoaded, signIn } = useSignIn();

  
  if (!isLoaded) {
    // Handle loading state
    return null;
  }
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-4 px-4">
        <p className="font-semibold text-2xl">Sign-in to access the gallery.</p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="email address..."
            className="w-full bg-transparent border-2 border-slate-800 rounded px-2 py-2 md:py-2 md:px-4 focus:ring"
          />
          <input
            type="password"
            placeholder="password..."
            className="w-full bg-transparent border-2 border-slate-800 rounded px-2 py-2 md:py-2 md:px-4 focus:ring"
          />

          <button className="w-full bg-slate-800 border-none rounded px-2 py-2 md:py-2 md:px-4 text-white font-medium text-lg">
            get access
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
