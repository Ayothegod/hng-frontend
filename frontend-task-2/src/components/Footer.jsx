import Image from "next/image";
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import twitter from "../assets/twitter.svg"
import youtube from "../assets/youtube.svg"
import { Copyright } from 'lucide-react';

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center gap-4 mb-8 ">
      <div className="flex gap-6 md:gap-12">
        <Image src={facebook} alt="facebook"/>
        <Image src={instagram} alt="facebook"/>
        <Image src={twitter} alt="facebook"/>
        <Image src={youtube} alt="facebook"/>
      </div>
      <div className="flex items-center gap-12 text-sm font-semibold">
        <p>Conditions of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <div className="text-sm font-medium flex text-slate-500 items-center">
      <Copyright className="h-3" /> 2021 MovieBox by Ayomide Adebisi
      </div>
    </div>
  );
};

export default Footer;
