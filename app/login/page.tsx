"use client";
import Image from "next/image";
import Link from 'next/link';
import Bookwise from "../../public/bookwiseLogin.png";
import Github from "../../public/githubIcon.png";
import Google from "../../public/googleIcon.png";

import { RocketLaunch } from "@phosphor-icons/react";

export default function Page() {
  return (
    <main className="flex justify-between h-screen max-w-screen-xl p-3 mx-auto font-sans">
      <div className="flex w-full h-full">
        <div className="relative w-full h-full max-w-xl max-h-screen">
          <Image src={Bookwise} alt="" fill />
        </div>

        <div className="flex flex-col justify-center w-auto gap-10 mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-slate-200">Boas vindas!</h1>
            <span className="text-base font-normal text-slate-200">
              Faça seu login ou acesse como visitante.
            </span>
          </div>

          <div className="flex flex-col gap-4 font-nunito w-80">
            <button className="flex items-center justify-start w-full gap-5 px-6 py-5 duration-300 ease-in-out rounded-lg bg-slate-800 hover:bg-slate-700" aria-label="Entrar com Google">
              <Image src={Google} width="32" height="32" alt="Google Logo" />
              <span className="text-base font-bold text-slate-200">Entrar com Google</span>
            </button>

            <button className="flex items-center justify-start w-full gap-5 px-6 py-5 duration-300 ease-in-out rounded-lg bg-slate-800 hover:bg-slate-700" aria-label="Entrar com Github" >
              <Image src={Github} width="32" height="32" alt="Github Logo" />
              <span className="text-base font-bold text-slate-200">Entrar com Github</span>
            </button>
            
            <Link href="/home" className="flex items-center justify-start w-full gap-5 px-6 py-5 duration-300 ease-in-out rounded-lg bg-slate-800 hover:bg-slate-700" aria-label="Acessar como visitante" >
              <RocketLaunch size={32} className="fill-indigo-400" alt="" />
              <span className="text-base font-bold text-slate-200">Acessar como visitante</span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
