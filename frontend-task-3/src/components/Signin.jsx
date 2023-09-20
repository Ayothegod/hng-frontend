import { useSignIn } from "@clerk/nextjs";
import { Loader2, Loader2Icon } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";

const Signin = () => {
    const router = useRouter()
  const { isLoaded, signIn } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded) {
      return null;
    }

    try {
      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        return router.push("/");
      } else {
        console.log(result);
      }
    } catch (err) {
    //   console.error("error", err?.errors[0]?.longMessage);
    }
  };

  if (!isLoaded) {
    return (
      <main className="flex items-center justify-center h-screen">
        <Loader2 className="animate-spin" />
      </main>
    );
  }
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-4 px-4">
        <p className="font-semibold text-2xl">Sign-in to access the gallery.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email address..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-2 border-slate-800 rounded px-2 py-2 md:py-2 md:px-4 focus:ring"
          />
          <input
            type="password"
            placeholder="enter your password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
