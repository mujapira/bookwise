"use client";
import Link from "next/link";
import Image from "next/image";
import { Star, CaretRight, X } from "@phosphor-icons/react";
import Book from "../../../public/Book.png";
import { useContext } from "react";
import { SidebarContext } from "../layout";
import MainReview from "@/components/Dashboard/MainReview";
import PopularBook from "@/components/Dashboard/PopularBook";

export default function Page() {
  const { isAsideActive, toggleAside } = useContext(SidebarContext);

  return (
    <>
      <section className="" aria-label="Lista de avaliações mais recentes">
        <section className="flex flex-col gap-3">
          <MainReview />
          <MainReview />
          <MainReview />
          <MainReview />
          <MainReview />
        </section>
      </section>

      <aside
        id="asideNavMenu"
        className={`
        flex flex-col h-full overflow-clip max-w-[324px] z-10 
        fixed inset-y-0 right-0 w-64 shadow-lg transform duration-300 ease-in-out
        ${isAsideActive ? "translate-x-0" : "translate-x-full"}
        rounded-lg rounded-l-md rounded-r-none
        2xl:translate-x-0 2xl:w-full 2xl:fixed 2xl:top-[170px] 2xl:right-[100px] 2xl:rounded-none`}
      >
        <header
          className="mb-0 flex align-middle items-center justify-start px-6 bg-gray-900 py-6 gap-3
        2xl:justify-between 2xl:bg-transparent 2xl:py-0"
        >
          <button
            className="bg-gray-900 text-white rounded-full p-1 pointer-events-auto visible opacity-100 duration-300 flex items-center justify-center
            2xl:invisible 2xl:opacity-0 2xl:hidden"
            onClick={toggleAside}
            aria-label="Fechar conteúdo adicional"
            aria-controls="asideNavMenu"
            aria-expanded={isAsideActive}
          >
            <X width={24} height={24} />
          </button>

          <div
            className="flex flex-col w-full
          2xl:flex-row 2xl:pb-4 2xl:justify-between"
          >
            <h1>Livros populares</h1>
            <Link className="flex align-middle items-center text-indigo-400" href="">
              <span>Ver todos</span>
              <CaretRight size={24} />
            </Link>
          </div>
        </header>

        <section
          className="flex flex-col gap-3 bg-gray-900 h-full
        2xl:bg-transparent 2xl:h-auto"
        >
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
