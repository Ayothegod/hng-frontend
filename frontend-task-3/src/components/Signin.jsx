import { supabaseClient } from "@/lib/supabase";
import { Loader2, Loader2Icon } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";

const Signin = () => {
  const router = useRouter();

  const signin = async () => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: "example@email.com",
      password: "example-password",
    });
    console.log(data, error);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col gap-4 px-4">
        <p className="font-semibold text-2xl">Sign-in to access the gallery.</p>

        <form className="space-y-4" onSubmit={signin}>
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

          <button className="w-full bg-slate-800 border-none rounded px-2 py-2 md:py-2 md:px-4 text-white font-medium text-lg" onClick={signin}>
            get access
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
