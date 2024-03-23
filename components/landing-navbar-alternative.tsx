"use client"

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "../constants";
import Link from "next/link";
import { Button } from "./ui/button";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";


const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
  const { isSignedIn } = useAuth();

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/logo_real.png"
              alt="Logo"
              width={50}
              height={50}
              
              />
           
          </div>
          <ul className="hidden lg:flex ml-11 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  href={item.href}
                 > {item.label} 
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button  variant="outline"  className="bg-gradient-to-r from-purple-400 to-pink-600 py-2 px-3 rounded-md on-hover:bg-pink-700 transition duration-200"
            >
                    Get Started
                </Button>
            </Link>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                   <Link 
                      onClick={toggleNavbar}
                      href={item.href}
                   > {item.label}  
                 </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
            <Link  href={isSignedIn ? "/dashboard" : "/sign-up"}>
                <Button variant="outline" className="bg-gradient-to-r from-purple-400 to-pink-600 py-2 px-3 rounded-md on-hover:bg-pink-700 transition duration-200"
                >
                    Get Started
                </Button>
            </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
