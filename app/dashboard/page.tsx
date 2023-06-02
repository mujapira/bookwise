"use client";

import Link from "next/link";
import Image from "next/image";
import { Star, CaretRight, X } from "@phosphor-icons/react";
import Bertelli from "../../public/Bertelli.png";
import Book from "../../public/Book.png";
import { useContext } from "react";
import { SidebarContext } from "./layout";
import { Source_Sans_3 } from "next/font/google";

export default function Page() {
  const { isAsideActive, toggleAside } = useContext(SidebarContext);

  return (
    <>
      <section className="" aria-label="Lista de avaliações mais recentes">
        <section className="flex flex-col gap-3">
          <section
            className="bg-gray-900 rounded-lg flex flex-col gap-8 p-6"
            aria-label="Avaliação"
          >
            <section
              className="flex justify-start gap-4 items-center"
              aria-label="Informações do usuário"
            >
              <div className="flex justify-center items-center rounded-full overflow-hidden p-[2px] bg-gradient-to-r from-cyan-500 to-blue-500">
                <Image
                  className="rounded-full"
                  src={Bertelli}
                  width="40"
                  height="40"
                  alt="Foto do usuário"
                />
              </div>

              <div className="flex flex-col justify-between">
                <h1 className="text-base">Pedro Bertelli</h1>
                <time className="text-sm text-zinc-400">Hoje</time>
              </div>
              <div className="flex gap-1 flex-1 justify-end">
                <Star weight="fill" className="text-indigo-400" />
                <Star weight="fill" className={`text-indigo-400`} />
                <Star weight="fill" className="text-indigo-400" />
                <Star className="text-indigo-400" />
                <Star className="text-indigo-400" />
              </div>
            </section>

            <section className="flex gap-5" aria-label="Informações do livro">
              <div className="flex justify-center items-center min-w-[112px] min-h-[152px]">
                <Image
                  className="rounded-sm object-cover"
                  width="112"
                  height="152"
                  src={Book}
                  alt="Foto do livro"
                />
              </div>
              <div className="flex w-auto flex-col justify-between">
                <div className="flex justify-between items-end">
                  <span className="flex flex-col">
                    <h1 className="text-base">O Hobbit</h1>
                    <h2 className="text-sm text-zinc-400">J.R.R Tolkien</h2>
                  </span>
                  <span className="text-indigo-400 font-bold pl-1">ver mais</span>
                </div>
                <p className="line-clamp-5 text-justify text-ellipsis overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum velit
                  minima obcaecati quas placeat, nemo quasi illo a. Aut nihil nobis dolore a quia
                  vitae unde aperiam iusto non? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nesciunt rerum velit minima obcaecati quas placeat, nemo quasi illo a. Aut
                  nihil nobis dolore a quia vitae unde aperiam iusto non? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt rerum velit minima obcaecati quas placeat,
                  nemo quasi illo a. Aut nihil nobis dolore a quia vitae unde aperiam iusto non?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum velit
                  minima obcaecati quas placeat, nemo quasi illo a. Aut nihil nobis dolore a quia
                  vitae unde aperiam iusto non? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nesciunt rerum velit minima obcaecati quas placeat, nemo quasi illo a. Aut
                  nihil nobis dolore a quia vitae unde aperiam iusto non?
                </p>
              </div>
            </section>
          </section>

          <section
            className="bg-gray-900 rounded-lg flex flex-col gap-8 p-6"
            aria-label="Avaliação"
          >
            <section
              className="flex justify-start gap-4 items-center"
              aria-label="Informações do usuário"
            >
              <div className="flex justify-center items-center rounded-full overflow-hidden p-[2px] bg-gradient-to-r from-cyan-500 to-blue-500">
                <Image
                  className="rounded-full"
                  src={Bertelli}
                  width="40"
                  height="40"
                  alt="Foto do usuário"
                />
              </div>

              <div className="flex flex-col justify-between">
                <h1 className="text-base">Pedro Bertelli</h1>
                <time className="text-sm text-zinc-400">Hoje</time>
              </div>
              <div className="flex gap-1 flex-1 justify-end">
                <Star weight="fill" className="text-indigo-400" />
                <Star weight="fill" className={`text-indigo-400`} />
                <Star weight="fill" className="text-indigo-400" />
                <Star className="text-indigo-400" />
                <Star className="text-indigo-400" />
              </div>
            </section>

            <section className="flex gap-5" aria-label="Informações do livro">
              <div className="flex justify-center items-center min-w-[112px] min-h-[152px]">
                <Image
                  className="rounded-sm object-cover"
                  width="112"
                  height="152"
                  src={Book}
                  alt="Foto do livro"
                />
              </div>
              <div className="flex w-auto flex-col justify-between">
                <div className="flex justify-between items-end">
                  <span className="flex flex-col">
                    <h1 className="text-base">O Hobbit</h1>
                    <h2 className="text-sm text-zinc-400">J.R.R Tolkien</h2>
                  </span>
                  <span className="text-indigo-400 font-bold pl-1">ver mais</span>
                </div>
                <p className="line-clamp-5 text-justify text-ellipsis overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum velit
                  minima obcaecati quas placeat, nemo quasi illo a. Aut nihil nobis dolore a quia
                  vitae unde aperiam iusto non? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nesciunt rerum velit minima obcaecati quas placeat, nemo quasi illo a. Aut
                  nihil nobis dolore a quia vitae unde aperiam iusto non? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt rerum velit minima obcaecati quas placeat,
                  nemo quasi illo a. Aut nihil nobis dolore a quia vitae unde aperiam iusto non?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum velit
                  minima obcaecati quas placeat, nemo quasi illo a. Aut nihil nobis dolore a quia
                  vitae unde aperiam iusto non? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nesciunt rerum velit minima obcaecati quas placeat, nemo quasi illo a. Aut
                  nihil nobis dolore a quia vitae unde aperiam iusto non?
                </p>
              </div>
            </section>
          </section>

                 
          <section
            className="bg-gray-900 rounded-lg flex flex-col gap-8 p-6"
            aria-label="Avaliação"
          >
            <section
              className="flex justify-start gap-4 items-center"
              aria-label="Informações do usuário"
            >
              <div className="flex justify-center items-center rounded-full overflow-hidden p-[2px] bg-gradient-to-r from-cyan-500 to-blue-500">
                <Image
                  className="rounded-full"
                  src={Bertelli}
                  width="40"
                  height="40"
                  alt="Foto do usuário"
                />
              </div>

              <div className="flex flex-col justify-between">
                <h1 className="text-base">Pedro Bertelli</h1>
                <time className="text-sm text-zinc-400">Hoje</time>
              </div>
              <div className="flex gap-1 flex-1 justify-end">
                <Star weight="fill" className="text-indigo-400" />
                <Star weight="fill" className={`text-indigo-400`} />
                <Star weight="fill" className="text-indigo-400" />
                <Star className="text-indigo-400" />
                <Star className="text-indigo-400" />
              </div>
            </section>

            <section className="flex gap-5" aria-label="Informações do livro">
              <div className="flex justify-center items-center min-w-[112px] min-h-[152px]">
                <Image
                  className="rounded-sm object-cover"
                  width="112"
                  height="152"
                  src={Book}
                  alt="Foto do livro"
                />
              </div>
              <div className="flex w-auto flex-col justify-between">
                <div className="flex justify-between items-end">
                  <span className="flex flex-col">
                    <h1 className="text-base">O Hobbit</h1>
                    <h2 className="text-sm text-zinc-400">J.R.R Tolkien</h2>
                  </span>
                  <span className="text-indigo-400 font-bold pl-1">ver mais</span>
                </div>
                <p className="line-clamp-5 text-justify text-ellipsis overflow-hidden">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum velit
                  minima obcaecati quas placeat, nemo quasi illo a. Aut nihil nobis dolore a quia
                  vitae unde aperiam iusto non? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nesciunt rerum velit minima obcaecati quas placeat, nemo quasi illo a. Aut
                  nihil nobis dolore a quia vitae unde aperiam iusto non? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt rerum velit minima obcaecati quas placeat,
                  nemo quasi illo a. Aut nihil nobis dolore a quia vitae unde aperiam iusto non?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt rerum velit
                  minima obcaecati quas placeat, nemo quasi illo a. Aut nihil nobis dolore a quia
                  vitae unde aperiam iusto non? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Nesciunt rerum velit minima obcaecati quas placeat, nemo quasi illo a. Aut
                  nihil nobis dolore a quia vitae unde aperiam iusto non?
                </p>
              </div>
            </section>
          </section>
        </section>
      </section>

      <aside
        id="asideNavMenu"
        className={`
        flex flex-col h-full overflow-clip max-w-[324px] z-10 
        fixed inset-y-0 right-0 w-64 shadow-lg transform duration-300 ease-in-out
        ${isAsideActive ? "translate-x-0" : "translate-x-full"}
        rounded-lg rounded-l-md rounded-r-none
        2xl:translate-x-0 2xl:w-full 2xl:fixed 2xl:top-[170px] 2xl:right-[20px] 2xl:rounded-none`}
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
          2xl:flex-row 2xl:pb-4"
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

          <section
            className="bg-gray-900 rounded-lg flex flex-col gap-8 px-6 odd:py-6"
            aria-label="Avaliação"
          >
            <section className="flex gap-5" aria-label="Informações do livro">
              <div className="flex justify-center items-center min-w-[64px] min-h-[94px]">
                <Image
                  className="rounded-sm object-cover"
                  width="70"
                  height="100"
                  src={Book}
                  alt="Foto do livro"
                />
              </div>
              <div className="flex w-auto flex-col justify-between">
                <span className="flex flex-col">
                  <h1 className="text-base">O Hobbit</h1>
                  <h2 className="text-sm text-zinc-400">J.R.R Tolkien</h2>
                </span>
                <div className="flex gap-1 justify-end">
                  <Star weight="fill" className="text-indigo-400" />
                  <Star weight="fill" className={`text-indigo-400`} />
                  <Star weight="fill" className="text-indigo-400" />
                  <Star className="text-indigo-400" />
                  <Star className="text-indigo-400" />
                </div>
              </div>
            </section>
          </section>

          <section
            className="bg-gray-900 rounded-lg flex flex-col gap-8 px-6 odd:py-6"
            aria-label="Avaliação"
          >
            <section className="flex gap-5" aria-label="Informações do livro">
              <div className="flex justify-center items-center min-w-[64px] min-h-[94px]">
                <Image
                  className="rounded-sm object-cover"
                  width="70"
                  height="100"
                  src={Book}
                  alt="Foto do livro"
                />
              </div>

              <div className="flex w-auto flex-col justify-between">
                <span className="flex flex-col">
                  <h1 className="text-base">O Hobbit</h1>
                  <h2 className="text-sm text-zinc-400">J.R.R Tolkien</h2>
                </span>
                <div className="flex gap-1 justify-end">
                  <Star weight="fill" className="text-indigo-400" />
                  <Star weight="fill" className={`text-indigo-400`} />
                  <Star weight="fill" className="text-indigo-400" />
                  <Star className="text-indigo-400" />
                  <Star className="text-indigo-400" />
                </div>
              </div>
            </section>
          </section>
          
          <section
            className="bg-gray-900 rounded-lg flex flex-col gap-8 px-6 odd:py-6"
            aria-label="Avaliação"
          >
            <section className="flex gap-5" aria-label="Informações do livro">
              <div className="flex justify-center items-center min-w-[64px] min-h-[94px]">
                <Image
                  className="rounded-sm object-cover"
                  width="70"
                  height="100"
                  src={Book}
                  alt="Foto do livro"
                />
              </div>

              <div className="flex w-auto flex-col justify-between">
                <span className="flex flex-col">
                  <h1 className="text-base">O Hobbit</h1>
                  <h2 className="text-sm text-zinc-400">J.R.R Tolkien</h2>
                </span>
                <div className="flex gap-1 justify-end">
                  <Star weight="fill" className="text-indigo-400" />
                  <Star weight="fill" className={`text-indigo-400`} />
                  <Star weight="fill" className="text-indigo-400" />
                  <Star className="text-indigo-400" />
                  <Star className="text-indigo-400" />
                </div>
              </div>
            </section>
          </section>
          
        </section>
      </aside>
    </>
  );
}
