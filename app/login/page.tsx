"use client";
import Image from "next/image";
import Link from 'next/link';
import Bookwise from "../../public/bookwiseLogin.png";
import Github from "../../public/githubIcon.png";
import Google from "../../public/googleIcon.png";

import { RocketLaunch } from "@phosphor-icons/react";

export default function Page() {
  return (
    <main
      className="font-sans max-w-screen-xl mx-auto p-3 h-screen flex justify-between"
    >
      <div className="flex w-full h-full">
        <div className="max-w-xl w-full max-h-screen h-full relative">
          <Image src={Bookwise} alt="" fill />
        </div>

        <div className="flex flex-col gap-10 justify-center w-auto mx-auto">
          <div>
            <h1 className="font-bold text-2xl text-slate-200">Boas vindas!</h1>
            <span className="font-normal text-base text-slate-200">
              Faça seu login ou acesse como visitante.
            </span>
          </div>

          <div className="font-nunito flex flex-col gap-4 w-80">
            <button
              className="flex gap-5 px-6 py-5 rounded-lg bg-slate-800 items-center justify-start w-full hover:bg-slate-700 ease-in-out duration-300"
              aria-label="Entrar com Google"
            >
              <Image src={Google} width="32" height="32" alt="Google Logo" />
              <span className="font-bold text-base text-slate-200">Entrar com Google</span>
            </button>
            <button
              className="flex gap-5 px-6 py-5 rounded-lg bg-slate-800 items-center justify-start w-full hover:bg-slate-700 ease-in-out duration-300"
              aria-label="Entrar com Github"
            >
              <Image src={Github} width="32" height="32" alt="Github Logo" />
              <span className="font-bold text-base text-slate-200">Entrar com Github</span>
            </button>
            <Link href="/home"
              className="flex gap-5 px-6 py-5 rounded-lg bg-slate-800 items-center justify-start w-full hover:bg-slate-700 ease-in-out duration-300"
              aria-label="Acessar como visitante"
            >
              <RocketLaunch size={32} className="fill-indigo-400" alt="" />
              <span className="font-bold text-base text-slate-200">Acessar como visitante</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
