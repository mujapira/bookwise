"use client";
import { Binoculars, ChartLineUp, User, X } from "@phosphor-icons/react";
import BookWise from "../public/bookwise.png";

import Link from "next/link";
import Image from "next/image";


interface NavbarProps {
    isNavActive: boolean;
    toggleNav: () => void;
    activeNavItem: string;
}

export default function Navbar({ isNavActive, activeNavItem, toggleNav }: NavbarProps) {
    return (
        <nav id="DashboardNavMenu" className={`flex flex-col rounded-none rounded-r-md bg-gray-900 overflow-clip max-w-[232px] w-full gap-16 fixed inset-y-0 
        left-0 shadow-lg transform duration-300 ease-in-out p-6 z-10 ${isNavActive ? "translate-x-0" : "-translate-x-full"} 
        2xl:translate-x-0 2xl:w-full 2xl:fixed 2xl:inset-y-[10px] 2xl:left-[20px] 2xl:rounded-lg`}>
            <header
                className="flex gap-2 mx-auto">
                <div className="flex justify-center items-center">
                    <Image src={BookWise} width={24} height={24} alt="" />
                </div>
                <span className="bg-gradient-to-r text-transparent bg-clip-text from-emerald-300 to-violet-400 font-bold text-2xl flex justify-center items-center">
                    BookWise
                </span>

                <button
                    className="text-white rounded-full p-1 pointer-events-auto visible opacity-100 2xl:invisible 2xl:opacity-0 duration-300 bg-neutral-900"
                    onClick={toggleNav}
                    aria-label="Fechar menu de navegação"
                    aria-expanded={isNavActive}
                    aria-controls="DashboardNavMenu"
                >
                    <X width={24} height={24} />
                </button>
            </header>

            <ul className="flex flex-col justify-center gap-4">
                <li>
                    <Link href="" className="flex gap-3 mx-auto w-1/2 relative">
                        {activeNavItem === "Início" ? (
                            <div className="absolute -left-4 h-6 w-1 bg-gradient-to-b from-emerald-300 to-violet-400 rounded-full"></div>
                        ) : (
                            <div className="absolute -left-4 h-6 w-1 bg-gradient-to-b from-transparent to-transparent rounded-full"></div>
                        )}
                        <ChartLineUp size={24} />
                        <span>Início</span>
                    </Link>
                </li>

                <li>
                    <Link href="" className="flex gap-3 mx-auto w-1/2 relative">
                        {activeNavItem === "Explorar" ? (
                            <div className="absolute -left-4 h-6 w-1 bg-gradient-to-b from-emerald-300 to-violet-400 rounded-full"></div>
                        ) : (
                            <div className="absolute -left-4 h-6 w-1 bg-gradient-to-b from-transparent to-transparent rounded-full"></div>
                        )}
                        <Binoculars size={24} />
                        <span>Explorar</span>
                    </Link>
                </li>

                <li>
                    <Link href="" className="flex gap-3 mx-auto w-1/2 relative">
                        {activeNavItem === "Perfil" ? (
                            <div className="absolute -left-4 h-6 w-1 bg-gradient-to-b from-emerald-300 to-violet-400 rounded-full"></div>
                        ) : (
                            <div className="absolute -left-4 h-6 w-1 bg-gradient-to-b from-transparent to-transparent rounded-full"></div>
                        )}
                        <User size={24} />
                        <span>Perfil</span>
                    </Link>
                </li>
            </ul>
        </nav>
    )

}
