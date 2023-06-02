"use client";
import Mask from "@/components/Mask";
import Navbar from "@/components/Navbar";
import { ChartLineUp, List, Popcorn } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { createContext } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  isAsideActive: boolean;
  isNavActive: boolean;
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
      <Navbar isNavActive={isNavActive} activeNavItem={activeNavItem} toggleNav={toggleNav} />

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

      <Mask isNavActive={isNavActive} isAsideActive={isAsideActive} closeAll={closeAll} />
    </>
  );
}
