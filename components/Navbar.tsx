"use client";
import {Binoculars, ChartLineUp, SignIn, User, X} from "@phosphor-icons/react";
import BookWise from "../public/bookwise.png";

import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
    isNavActive: boolean;
    toggleNav: () => void;
    activeNavItem: string;
}

export default function Navbar({
    isNavActive,
    activeNavItem,
    toggleNav,
}: NavbarProps) {
    return (
        <nav
            id="DashboardNavMenu"
            className={`flex flex-col rounded-none rounded-r-md bg-gray-900 overflow-clip max-w-[232px] w-full gap-16 fixed inset-y-0 
        left-0 shadow-lg transform duration-300 ease-in-out p-6 z-10 justify-between ${
            isNavActive ? "translate-x-0" : "-translate-x-full"
        } 
        2xl:translate-x-0 2xl:w-full 2xl:fixed 2xl:inset-y-[10px] 2xl:left-[20px] 2xl:rounded-lg`}>
            <div className="flex flex-col gap-16">
                <header className="flex gap-2 mx-auto">
                    <div className="flex items-center justify-center">
                        <Image src={BookWise} width={24} height={24} alt="" />
                    </div>
                    <span className="flex items-center justify-center text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-emerald-300 to-violet-400">
                        BookWise
                    </span>

                    <button
                        className="flex items-center justify-center visible p-1 duration-300 rounded-md opacity-100 pointer-events-auto bg-slate-800 2xl:invisible 2xl:opacity-0 2xl:hidden hover:bg-indigo-900"
                        onClick={toggleNav}
                        aria-label="Fechar menu de navegação"
                        aria-expanded={isNavActive}
                        aria-controls="DashboardNavMenu">
                        <X className="text-indigo-400" width={24} height={24} />
                    </button>
                </header>

                <ul className="flex flex-col justify-center gap-4">
                    <li>
                        <Link
                            href="/home"
                            className="relative flex w-1/2 gap-3 mx-auto duration-300 hover:text-zinc-400">
                            {activeNavItem === "Início" ? (
                                <div className="absolute w-1 h-6 rounded-full -left-4 bg-gradient-to-b from-emerald-300 to-violet-400"></div>
                            ) : (
                                <div className="absolute w-1 h-6 rounded-full -left-4 bg-gradient-to-b from-transparent to-transparent"></div>
                            )}
                            <ChartLineUp size={24} />
                            <span>Início</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="/explore"
                            className="relative flex w-1/2 gap-3 mx-auto duration-300 hover:text-zinc-400">
                            {activeNavItem === "Explorar" ? (
                                <div className="absolute w-1 h-6 rounded-full -left-4 bg-gradient-to-b from-emerald-300 to-violet-400"></div>
                            ) : (
                                <div className="absolute w-1 h-6 rounded-full -left-4 bg-gradient-to-b from-transparent to-transparent"></div>
                            )}
                            <Binoculars size={24} />
                            <span>Explorar</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            href=""
                            className="relative flex w-1/2 gap-3 mx-auto duration-300 hover:text-zinc-400">
                            {activeNavItem === "Perfil" ? (
                                <div className="absolute w-1 h-6 rounded-full -left-4 bg-gradient-to-b from-emerald-300 to-violet-400"></div>
                            ) : (
                                <div className="absolute w-1 h-6 rounded-full -left-4 bg-gradient-to-b from-transparent to-transparent"></div>
                            )}
                            <User size={24} />
                            <span>Perfil</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <Link
                href=""
                className="flex items-center justify-center w-full gap-3 mx-auto duration-300 hover:text-zinc-400">
                <span className="text-center whitespace-nowrap">
                    Fazer Login
                </span>
                <SignIn className="text-teal-400" size={32} />
            </Link>
        </nav>
    );
}
