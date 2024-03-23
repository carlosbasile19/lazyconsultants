"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";
import { Mail, CodeIcon, ImageIcon, LayoutDashboard, MessageSquare, MusicIcon, SettingsIcon, VideoIcon, BookA } from "lucide-react";
import { usePathname } from "next/navigation";
import { FreeCounter } from "./free-counter";

const montserrat = Montserrat({weight: "600", subsets: ["latin-ext"]});

const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
        color: "text-sky-500",
    },
    {
        label: "Conversation",
        icon: MessageSquare,
        href: "/conversation",
        color: "text-violet-500",
    },
    {
        label: "Smart Translation",
        icon : BookA,
        color: "text-pink-700",
        href: "/smart-translation",
    },
    {
        label: "Mail Auto-Correction",
        icon: Mail,
        href: "/email-correction",
        color: "text-orange-500",
    },
    {
        label: "Settings",
        icon: SettingsIcon,
        href: "/settings",
    },
]

interface SidebarProps {
    apiLimitCount: number;
    isPro: boolean;
}


const Sidebar = ({
   apiLimitCount = 0 ,
    isPro = false
}: SidebarProps) => {

    const pathname = usePathname();
    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
            <div className="px-3 py-2 flex-1">
               <Link href="/dashboard" className="flex items-center pl-3 mb-14">
                 <div className="relative w-11 h-12 mr-4">
                     <Image
                      fill 
                      alt="Logo"
                      src="/logo_real.png"
                     />
                 </div>
                 <h1 className={cn("text-1xl font-bold", montserrat.className)}>
                    Lazy Consultants
                 </h1>
               </Link>
               <div className="space-y-1">
                     {routes.map((route) => (
                      <Link
                        href={route.href}
                        key={route.href}
                        className={cn("text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition", pathname === route.href ? "bg-white/10 text-white" : "text-zinc-400")}
                      >
                        <div className="flex items-center flex-1">
                            <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                            {route.label}
                        </div>
                      </Link>

                     ))}
               </div>

            </div>
            <FreeCounter
                isPro={isPro}
             apiLimitCount={apiLimitCount}

            />
        </div>
    );
}

export default Sidebar;