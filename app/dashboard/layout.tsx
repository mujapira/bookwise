"use client";
import { Binoculars, CaretRight, ChartLineUp, List, Popcorn, User, X } from "@phosphor-icons/react";
import BookWise from "../../public/bookwise.png";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

import { createContext } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  isAsideActive: boolean;
}

interface SidebarContextType {
  isAsideActive: boolean;
  toggleAside: () => void;
}

export const SidebarContext = createContext<SidebarContextType>({} as SidebarContextType);

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [activeNavItem, setActiveNavItem] = useState("");
  const [isNavActive, setIsNavActive] = useState(false);
  const [isAsideActive, setIsAsideActive] = useState(false);

  function toggleAside() {
    setIsAsideActive(!isAsideActive);
  }

  function toggleNav() {
    setIsNavActive(!isNavActive);
  }

  function closeAll() {
    setIsNavActive(false);
    setIsAsideActive(false);
  }
  useEffect(() => {
    setActiveNavItem("Início");
  }, []);

  return (
    <>
      <nav
        id="DashboardNavMenu"
        className={`
        flex flex-col rounded-none rounded-r-md bg-gray-900 overflow-clip max-w-[232px] w-full gap-16
        fixed inset-y-0 left-0 shadow-lg transform duration-300 ease-in-out p-6 z-10
        ${isNavActive ? "translate-x-0" : "-translate-x-full"}
        2xl:translate-x-0 2xl:w-full 2xl:fixed 2xl:inset-y-[10px] 2xl:left-[20px] 2xl:rounded-lg`}
      >
        <header
          className="flex gap-2 mx-auto
        
        "
        >
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
            aria-expanded={isAsideActive}
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

      <main
        className="w-full max-w-7xl mx-auto
        2xl:max-w-2xl"
      >
        <div
          className="flex gap-3 font-bold text-2xl align-middle justify-between 
          mt-[20px] mb-[20px]
          2xl:mt-[62px] 2xl:mb-[40px]"
        >
          <div className="flex gap-3 align-middle items-center flex-row 2xl:flex-row-reverse">
            <button
              className="bg-gray-900 p-2 rounded-md visible opacity-100 2xl:invisible 2xl:opacity-0 duration-300"
              onClick={toggleNav}
              aria-hidden={isNavActive}
              aria-label="Abrir menu de navegação"
              aria-controls="DashboardNavMenu"
            >
              <List size={32} />
            </button>
            <div className="flex gap-3 align-middle items-center">
              <ChartLineUp className="text-teal-400" size={24} />
              <h1>Início</h1>
            </div>
          </div>
          <button
            className="bg-gray-900 p-2 rounded-md visible opacity-100 2xl:invisible 2xl:opacity-0 duration-300"
            onClick={toggleAside}
            aria-hidden={isAsideActive}
            aria-label="Abrir conteúdo adicional"
            aria-controls="asideNavMenu"
          >
            <Popcorn size={32} />
          </button>
        </div>
        <div className="mb-4">
          <h1>Avaliações mais recentes</h1>
        </div>
        <SidebarContext.Provider value={{ isAsideActive, toggleAside }}>
          {children}
        </SidebarContext.Provider>
      </main>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-1 ${
          isNavActive || isAsideActive ? "pointer-events-auto flex" : "pointer-events-none hidden"
        }`}
        onClick={closeAll}
      ></div>
    </>
  );
}
