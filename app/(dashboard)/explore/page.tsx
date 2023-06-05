"use client";

import {useContext} from "react";
import {SidebarContext} from "../layout";
import {Binoculars, List, MagnifyingGlass} from "@phosphor-icons/react";
import PopularBook from "@/components/Dashboard/PopularBook";

export default function Page() {
    const {toggleNav, isNavActive, setActiveNavItem} =
        useContext(SidebarContext);
    setActiveNavItem("Explorar");

    const categories = [
        "Tudo",
        "Computação",
        "Educação",
        "Fantasia",
        "Ficção científica",
        "Horror",
        "HQs",
        "Suspense",
    ];

    return (
        <>
            <main className="flex flex-col w-full h-full gap-12 pl-0 mx-auto max-w-7xl 2xl:max-w-screen-xl 2xl:pl-72">
                <div className="flex gap-3 font-bold text-2xl align-middle justify-between mt-[20px] mb-[20px] 2xl:mt-[62px]">
                    <div className="flex flex-row items-center gap-3 align-middle 2xl:flex-row-reverse ">
                        <button
                            className="visible p-2 duration-300 bg-gray-900 rounded-md opacity-100 2xl:invisible 2xl:opacity-0 2xl:sr-only"
                            onClick={toggleNav}
                            aria-hidden={isNavActive}
                            aria-label="Abrir menu de navegação"
                            aria-controls="DashboardNavMenu">
                            <List size={32} />
                        </button>
                        <div className="flex items-center gap-3 align-middle">
                            <Binoculars className="text-teal-400" size={32} />
                            <h1>Explorar</h1>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center w-full max-w-sm text-base">
                        <input
                            autoComplete="off"
                            type="search"
                            id="search"
                            placeholder="Buscar livro ou autor"
                            className="w-full py-3 pl-5 bg-transparent border-indigo-900 rounded-md border-[1px]
                            peer focus:outline-none focus:border-cyan-800 focus:ring-1 focus:ring-cyan-800 focus:caret-cyan-800"
                        />

                        <MagnifyingGlass
                            size={32}
                            className="absolute text-indigo-900 pointer-events-none right-5 peer-focus:text-cyan-800"
                        />
                    </div>
                </div>

                <div role="navigation" aria-label="Categorias de Livros">
                    <ul className="flex flex-wrap gap-3">
                        {categories.map((category) => {
                            if (category === "Tudo") {
                                return (
                                    <li
                                        key={category}
                                        className="flex items-center content-center w-auto px-4 py-1 bg-indigo-900 border border-indigo-900 text-zinc-200 rounded-2xl hover:text-zinc-200">
                                        <a href="#" aria-current="page">
                                            {category}
                                        </a>
                                    </li>
                                );
                            } else {
                                return (
                                    <li
                                        key={category}
                                        className="flex items-center content-center w-auto px-4 py-1 text-indigo-400 border border-indigo-400 rounded-2xl hover:bg-indigo-900 hover:text-zinc-200">
                                        <a href="#" aria-current="page">
                                            {category}
                                        </a>
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    <PopularBook read />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                    <PopularBook />
                </div>
            </main>
        </>
    );
}
