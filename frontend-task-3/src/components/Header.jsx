import Link from "next/link";
import { useEffect, useState } from "react";
import { supabaseClient } from "@/lib/supabase";

const Header = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = async () => {
      const {
        data: { user },
      } = await supabaseClient.auth.getUser();
      setUser(user);
    };
    user();
  }, []);

  return (
    <header className="py-2 flex items-center justify-between">
      <Link href="/gallery">
        <p className="font-mono text-2xl md:text-4xl">Image Gallery</p>
      </Link>
      <div>
        <p className="font-semibold text-slate-800 underline text-lg">
          {user ? user?.email : "Sign in"}
        </p>
      </div>
    </header>
  );
};

export default Header;
