'use client';

import { useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobilenavBar from "./MobilenavBar";
import { usePathname } from "next/navigation";

const Header = () => {

  const[header,setHeader]=useState(false);
  const path=usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${ header
        ? 'py-4  bg-white shadow-lg dark:bg-[hsl(var(--background))] dark:py-4 dark:shadow-lg'
        : 'py-6 dark:bg-transparent'} sticky top-0 z-30 transition-all ${path==='/'&&'bg-[#fffff]'}`}>
        <div className="container mx-auto mt-2">
            <div className="flex justify-between items-center sm:mr-2">
                <Logo/>
                <div className="flex items-center gap-x-6 ">
                    <Navbar containerStyles='hidden xl:flex gap-x-8 items-center' linkStyles='relative hover:text-primary transition-all'
                     underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'/>
                    <ThemeToggler/>

                    <div className="xl:hidden p-3">
                        <MobilenavBar />
                    </div>


                </div>    

            </div>
        </div>
    </header>
  )
}

export default Header;