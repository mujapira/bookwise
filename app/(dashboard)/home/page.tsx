"use client";
import Link from "next/link";
import MainReview from "@/components/Dashboard/MainReview";
import PopularBook from "@/components/Dashboard/PopularBook";
import {ChartLineUp, List, Popcorn, CaretRight, X} from "@phosphor-icons/react";
import {useContext} from "react";
import {SidebarContext} from "../layout";

export default function Page() {
    const {
        isAsideActive,
        toggleAside,
        toggleNav,
        isNavActive,
        setActiveNavItem,
    } = useContext(SidebarContext);
    setActiveNavItem("Início");
    return (
        <>
            <main className="w-full mx-auto max-w-7xl 2xl:max-w-2xl">
                <div className="flex gap-3 font-bold text-2xl align-middle justify-between  mt-[20px] mb-[20px] 2xl:mt-[62px] 2xl:mb-[40px]">
                    <div className="flex flex-row items-center gap-3 align-middle 2xl:flex-row-reverse">
                        <button
                            className="visible p-2 duration-300 bg-gray-900 rounded-md opacity-100 2xl:invisible 2xl:opacity-0"
                            onClick={toggleNav}
                            aria-hidden={isNavActive}
                            aria-label="Abrir menu de navegação"
                            aria-controls="DashboardNavMenu">
                            <List size={32} />
                        </button>
                        <div className="flex items-center gap-3 align-middle">
                            <ChartLineUp className="text-teal-400" size={24} />
                            <h1>Início</h1>
                        </div>
                    </div>
                    <button
                        className="visible p-2 duration-300 bg-gray-900 rounded-md opacity-100 2xl:invisible 2xl:opacity-0"
                        onClick={toggleAside}
                        aria-hidden={isAsideActive}
                        aria-label="Abrir conteúdo adicional"
                        aria-controls="asideNavMenu">
                        <Popcorn size={32} />
                    </button>
                </div>
                <div className="mb-4">
                    <h1>Avaliações mais recentes</h1>
                </div>
                <section aria-label="Lista de avaliações mais recentes">
                    <section className="flex flex-col gap-3">
                        <MainReview />
                        <MainReview />
                        <MainReview />
                        <MainReview />
                        <MainReview />
                    </section>
                </section>
            </main>

            <aside
                id="asideNavMenu"
                className={`flex flex-col h-full overflow-clip max-w-[324px] z-10 fixed inset-y-0 right-0 w-64 shadow-lg transform duration-300 ease-in-out ${
                    isAsideActive ? "translate-x-0" : "translate-x-full"
                } rounded-lg rounded-l-md rounded-r-none 2xl:translate-x-0 2xl:w-full 2xl:fixed 2xl:top-[158px] 2xl:right-[100px] 2xl:rounded-none`}>
                <header className="flex items-center justify-start gap-3 px-6 py-6 mt-1 mb-0 align-middle bg-gray-900 2xl:justify-between 2xl:bg-transparent 2xl:py-0">
                    <button
                        className="flex items-center justify-center visible p-1 duration-300 rounded-md opacity-100 pointer-events-auto bg-slate-800 2xl:invisible 2xl:opacity-0 2xl:hidden hover:bg-indigo-900"
                        onClick={toggleAside}
                        aria-label="Fechar conteúdo adicional"
                        aria-controls="asideNavMenu"
                        aria-expanded={isAsideActive}>
                        <X className="text-indigo-400" width={24} height={24} />
                    </button>
                    <div className="flex flex-col items-center w-full 2xl:flex-row 2xl:pb-4 2xl:justify-between">
                        <h1>Livros populares</h1>
                        <Link
                            className="flex items-center px-2 py-1 text-indigo-400 align-middle duration-200 rounded-md hover:bg-indigo-400 hover:bg-opacity-10"
                            href="/explore">
                            <span>Ver todos</span>
                            <CaretRight size={24} />
                        </Link>
                    </div>
                </header>

                <section className="flex flex-col h-full gap-3 bg-gray-900 2xl:bg-transparent 2xl:h-auto">
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                </section>
            </aside>
        </>
    );
}
