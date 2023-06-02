import Image from "next/image";
import Bertelli from "../../public/Bertelli.png";
import { Star } from "@phosphor-icons/react";
import Book from "../../public/Book.png";

export default function MainReview() {
    return (
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
    )
}