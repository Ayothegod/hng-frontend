import React from 'react'
import Logo from "../assets/Logo.svg"
import menu from "../assets/Menu.svg"
import Image from 'next/image'
import { Search} from "lucide-react"
// ../assets/menu.svg
const Header = () => {

  return (
    <div className='pt-4 px-2 sm:px-6 md:px-10 lg:px-20 w-full flex items-center text-white justify-between'>
        <Image src={Logo} alt='Logo'/>
        <div className='flex relative'>
            <input type="text" placeholder='What do you want to watch?' className='hidden md:inline border border-slate-200 rounded px-2 py-2 bg-transparent w-96 placeholder:text-white' />
            <Search className='md:absolute right-2 top-2 text-white'/>
        </div>
        <div className='hidden sm:flex gap-4 '>
            <p className='text-lg text-white font-semibold'>sign in</p>
        <Image src={menu} alt='menu'/>
        </div>
    </div>
  )
}
// absolute top-2 px-2 sm:px-6 md:px-10 lg:px-20 w-full flex items-center text-white justify-between

export default Header