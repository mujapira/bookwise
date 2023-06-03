import Image from "next/image";
import Bertelli from "../../public/Bertelli.png";
import {Star} from "@phosphor-icons/react";
import Book from "../../public/Book.png";
import Link from "next/link";

export default function MainReview() {
    return (
        <section
            className="flex flex-col gap-8 p-6 duration-200 bg-gray-900 border-2 border-transparent rounded-lg hover:border-indigo-900"
            aria-label="Avaliação">
            <section
                className="flex items-center justify-start gap-4"
                aria-label="Informações do usuário">
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
                <div className="flex justify-end flex-1 gap-1">
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
                        className="object-cover rounded-sm"
                        width="112"
                        height="152"
                        src={Book}
                        alt="Foto do livro"
                    />
                </div>
                <div className="flex flex-col justify-between w-auto">
                    <div className="flex items-end justify-between">
                        <span className="flex flex-col">
                            <h1 className="text-base">O Hobbit</h1>
                            <h2 className="text-sm text-zinc-400">
                                J.R.R Tolkien
                            </h2>
                        </span>
                        <Link href="./book" className="px-2 py-1 font-bold text-indigo-400 duration-200 rounded-md hover:bg-indigo-400 hover:bg-opacity-10">
                            ver mais
                        </Link>
                    </div>
                    <p className="overflow-hidden text-justify line-clamp-5 text-ellipsis">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt rerum velit minima obcaecati quas placeat, nemo
                        quasi illo a. Aut nihil nobis dolore a quia vitae unde
                        aperiam iusto non? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Nesciunt rerum velit
                        minima obcaecati quas placeat, nemo quasi illo a. Aut
                        nihil nobis dolore a quia vitae unde aperiam iusto non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt rerum velit minima obcaecati quas placeat, nemo
                        quasi illo a. Aut nihil nobis dolore a quia vitae unde
                        aperiam iusto non? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Nesciunt rerum velit
                        minima obcaecati quas placeat, nemo quasi illo a. Aut
                        nihil nobis dolore a quia vitae unde aperiam iusto non?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nesciunt rerum velit minima obcaecati quas placeat, nemo
                        quasi illo a. Aut nihil nobis dolore a quia vitae unde
                        aperiam iusto non?
                    </p>
                </div>
            </section>
        </section>
    );
}
