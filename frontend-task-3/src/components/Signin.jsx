import { supabaseClient } from "@/lib/supabase";
import { Loader2, Loader2Icon } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";

const Signin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);

  const signin = async (e) => {
    e.preventDefault()
    if (!email || !password) return setError("please input email and password");
    if (!email.includes(".com")) return setError("invalid email");
    if (password.length < 8) return setError("password is too short");
    
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });
    // console.log(data, error);
    if (data?.user?.aud === "authenticated") {
      setLoader(true);
      router.push("/gallery")
    }

    if (error) return setError("wrong credentials, try again.");
  };

  return (
    <div className="flex items-center justify-center h-full">

      <div className="flex flex-col gap-4 px-4">
        <p className="font-semibold text-2xl">Sign-in to access the gallery.</p>

        <form className="space-y-4" onSubmit={signin}>
          <p className="text-sm font-semibold font-mono text-red-600">{error}</p>
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

          <button className="w-full bg-slate-800 border-none rounded px-2 py-2 md:py-2 md:px-4 text-white font-medium text-lg grid place-items-center" onClick={signin}>
            {!loader ? "get access" : <Loader2 className="animate-spin"/>}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Signin;
