import Image from "next/image";
import {Star} from "@phosphor-icons/react";
import Book from "../../public/Book.png";

interface PopularBookProps {
    read?: boolean;
}

export default function PopularBook({read = false}: PopularBookProps) {
    return (
        <section className="relative flex flex-col items-start justify-center gap-8 p-6 bg-gray-900 border-2 border-transparent rounded-lg hover:border-indigo-900" aria-label="Avaliação">
                {read &&
                <div className="absolute top-0 right-0 px-3 py-0 rounded-tr-lg rounded-bl-lg bg-cyan-950">
                    <span className="font-bold text-teal-400">LIDO</span>
                </div>
                }
            <section className="flex gap-5" aria-label="Informações do livro">
                <div className="flex justify-center items-center min-w-[64px] min-h-[94px]">
                    <Image
                        className="object-cover rounded-sm"
                        width="70"
                        height="100"
                        src={Book}
                        alt="Foto do livro"
                    />
                </div>

                <div className="flex flex-col justify-between w-auto">
                    <span className="flex flex-col">
                        <h1 className="text-base">O Hobbit</h1>
                        <h2 className="text-sm text-zinc-400">J.R.R Tolkien</h2>
                    </span>
                    <div className="flex justify-end gap-1">
                        <Star weight="fill" className="text-indigo-400" />
                        <Star weight="fill" className={`text-indigo-400`} />
                        <Star weight="fill" className="text-indigo-400" />
                        <Star className="text-indigo-400" />
                        <Star className="text-indigo-400" />
                    </div>
                </div>
            </section>
        </section>
    );
}
