import Image from "next/image";
import { Star } from "@phosphor-icons/react";
import Book from "../../public/Book.png";

export default function PopularBook() {
    return (
        <section
            className="bg-gray-900 rounded-lg flex flex-col gap-8 px-6 odd:py-6 2xl:py-6"
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
    )
}