"use client";
import Mask from "@/components/Mask";
import Navbar from "@/components/Navbar";
import {useEffect, useState} from "react";
import {createContext} from "react";

interface DashboardLayoutProps {
    children: React.ReactNode;
    isAsideActive: boolean;
    isNavActive: boolean;
}

interface SidebarContextType {
    isAsideActive: boolean;
    toggleAside: () => void;
    toggleNav: () => void;
    isNavActive: boolean;
    activeNavItem: string;
    setActiveNavItem: React.Dispatch<React.SetStateAction<string>>;
}

export const SidebarContext = createContext<SidebarContextType>(
    {} as SidebarContextType
);

export default function DashboardLayout({children}: DashboardLayoutProps) {
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
            <Navbar
                isNavActive={isNavActive}
                activeNavItem={activeNavItem}
                toggleNav={toggleNav}
            />

            <SidebarContext.Provider
                value={{
                    isAsideActive,
                    isNavActive,
                    toggleAside,
                    toggleNav,
                    activeNavItem,
                    setActiveNavItem
                }}>
                {children}
            </SidebarContext.Provider>

            <Mask
                isNavActive={isNavActive}
                isAsideActive={isAsideActive}
                closeAll={closeAll}
            />
        </>
    );
}
