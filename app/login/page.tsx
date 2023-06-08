"use client";
import Image from "next/image";
import Link from "next/link";
import Github from "../../public/githubIcon.png";
import Google from "../../public/googleIcon.png";
import {signIn} from "next-auth/react";

import {
    BookBookmark,
    Eye,
    EyeSlash,
    RocketLaunch,
    SignIn,
} from "@phosphor-icons/react";
import {useState} from "react";
import axios from "axios";
import {toast} from "react-hot-toast";

export default function Page() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [name, setName] = useState("");

    const handleRegisterEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRegisterEmail(event.target.value);
    };

    const handleRegisterPasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRegisterPassword(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const registerUser = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = {
            email: registerEmail,
            password: registerPassword,
            name: name,
        };
        axios
            .post("/api/register", data)
            .then(() => toast.success("Usuário cadastrado com sucesso"))
            .catch(() => toast.error("Erro ao cadastrar usuário"));
    };

    const [signInEmail, setSignInEmail] = useState("");
    const [signInPassword, setSignInPassword] = useState("");

    const handleSignInEmailChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSignInEmail(event.target.value);
    };

    const handleSignInPasswordChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSignInPassword(event.target.value);
    };

    const loginUser = async (event: React.FormEvent) => {
        event.preventDefault();
        const data = {
            email: signInEmail,
            password: signInPassword,
        };
        await signIn("credentials", {...data, redirect: false}).then(
            (callback) => {
                if (callback?.error) {
                    toast.error(callback.error);
                }
                if (callback?.ok && !callback?.error) {
                    toast.success("Usuário logado com sucesso");
                }
            }
        );
    };

    const [isPasswordVisible, setIsPasswordVisibility] = useState(false);

    const [isRegisterFormActive, setIsRegisterFormActive] = useState(false);
    const [isSignFormActive, setIsSignInFormActive] = useState(true);

    function toggleForms() {
        setIsRegisterFormActive(!isRegisterFormActive);
        setIsSignInFormActive(!isSignFormActive);
    }

    const handlePasswordVisibility = () => {
        setIsPasswordVisibility(!isPasswordVisible);
    };

    async function handleConnectWithGoogle() {
        await signIn("google");
    }

    return (
        <main className="flex justify-between h-screen max-w-screen-xl p-3 mx-auto font-sans">
            <div className="flex flex-col justify-center flex-1 w-auto gap-8 mx-auto">
                <div>
                    <h1 className="text-2xl font-bold text-slate-200">
                        Boas vindas!
                    </h1>
                    <span className="text-base font-normal text-slate-200">
                        Bookwise, plataforma para amantes de livros
                    </span>
                </div>

                <div className="flex flex-col gap-4 font-nunito w-80">
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault;
                            handleConnectWithGoogle();
                        }}
                        className="flex items-center justify-start w-full gap-5 px-6 py-5 duration-300 ease-in-out rounded-lg bg-slate-800 hover:bg-slate-700"
                        aria-label="Entrar com Google">
                        <Image
                            src={Google}
                            width="32"
                            height="32"
                            alt="Google Logo"
                        />
                        <span className="text-base font-bold text-slate-200">
                            Entrar com Google
                        </span>
                    </button>

                    <button
                        className="flex items-center justify-start w-full gap-5 px-6 py-5 duration-300 ease-in-out rounded-lg bg-slate-800 hover:bg-slate-700"
                        aria-label="Entrar com Github">
                        <Image
                            src={Github}
                            width="32"
                            height="32"
                            alt="Github Logo"
                        />
                        <span className="text-base font-bold text-slate-200">
                            Entrar com Github
                        </span>
                    </button>

                    <Link
                        href="/home"
                        className="flex items-center justify-start w-full gap-5 px-6 py-5 duration-300 ease-in-out rounded-lg bg-slate-800 hover:bg-slate-700"
                        aria-label="Acessar como visitante">
                        <RocketLaunch
                            size={32}
                            className="fill-indigo-400"
                            alt=""
                        />
                        <span className="text-base font-bold text-slate-200">
                            Acessar como visitante
                        </span>
                    </Link>

                    <div className="relative rounded-md">
                        <button
                            onClick={toggleForms}
                            className={`flex items-center justify-start w-full gap-5 px-6 py-5 duration-300 ease-in-out rounded-lg ${
                                !isRegisterFormActive
                                    ? "rounded-b-none hover:bg-none"
                                    : "hover:bg-slate-700"
                            } 
                            bg-slate-800`}
                            aria-label="Entrar com Github">
                            <SignIn
                                size={32}
                                className="fill-indigo-400"
                                alt=""
                            />
                            <span className="text-base font-bold text-slate-200">
                                Entre com sua conta
                            </span>
                        </button>

                        <form
                            onSubmit={loginUser}
                            className={`flex flex-col items-center justify-between overflow-clip w-full gap-6 px-6 py-5 pt-0 duration-400 transition-all rounded-lg rounded-t-none bg-slate-800 h-0 ${
                                !isRegisterFormActive ? "h-52" : "h-0 pb-0"
                            }`}
                            aria-label="Formulário de cadastro">
                            <div className="w-full">
                                <input
                                    type="email"
                                    id="email-login"
                                    name="email"
                                    value={signInEmail}
                                    onChange={handleSignInEmailChange}
                                    className="w-full px-3 py-2 bg-transparent border border-indigo-500 rounded-lg"
                                    placeholder="E-mail"
                                    required
                                    disabled={
                                        isRegisterFormActive ? true : false
                                    }
                                />
                            </div>

                            <div className="w-full">
                                <div className="relative">
                                    <input
                                        type={
                                            isPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        id="senha-login"
                                        name="senha"
                                        value={signInPassword}
                                        onChange={handleSignInPasswordChange}
                                        className="w-full px-3 py-2 bg-transparent border border-indigo-500 rounded-lg"
                                        placeholder="Senha secreta"
                                        required
                                        disabled={
                                            isRegisterFormActive ? true : false
                                        }
                                    />
                                    <button
                                        type="button"
                                        onClick={handlePasswordVisibility}
                                        className="absolute inset-y-0 right-0 flex items-center pr-2 duration-200 text-zinc-200 hover:text-zinc-400">
                                        {isPasswordVisible ? (
                                            <EyeSlash size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                className="w-full px-4 py-2 font-bold text-white duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-700"
                                type="submit">
                                Entrar
                            </button>
                        </form>
                    </div>

                    <div className="relative">
                        <button
                            className={`flex items-center justify-start w-full gap-5 px-6 py-5 duration-300 ease-in-out rounded-lg ${
                                isRegisterFormActive
                                    ? "rounded-b-none hover:bg-none"
                                    : "hover:bg-slate-700"
                            } 
                            bg-slate-800`}
                            aria-label="Entrar com Github"
                            onClick={toggleForms}>
                            <BookBookmark
                                size={32}
                                className="fill-indigo-400"
                                alt=""
                            />
                            {isRegisterFormActive ? (
                                <span className="text-base font-bold text-slate-200">
                                    Preencha os dados
                                </span>
                            ) : (
                                <span className="text-base font-bold text-slate-200">
                                    Criar uma conta
                                </span>
                            )}
                        </button>

                        <form
                            onSubmit={registerUser}
                            className={`flex flex-col items-center justify-between w-full gap-6 px-6 py-5 pt-0 overflow-hidden duration-400 transition-all 
                                rounded-lg rounded-t-none bg-slate-800 h-0 ${
                                    isRegisterFormActive ? "h-72" : "h-0 pb-0"
                                }`}
                            aria-label="Formulário de cadastro">
                            <div className="w-full">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={handleNameChange}
                                    className="w-full px-3 py-2 bg-transparent border border-indigo-500 rounded-lg"
                                    placeholder="Seu nome"
                                    required
                                    disabled={
                                        isRegisterFormActive ? false : true
                                    }
                                />
                            </div>
                            <div className="w-full">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={registerEmail}
                                    onChange={handleRegisterEmailChange}
                                    className="w-full px-3 py-2 bg-transparent border border-indigo-500 rounded-lg"
                                    placeholder="Seu melhor e-mail"
                                    required
                                    disabled={
                                        isRegisterFormActive ? false : true
                                    }
                                />
                            </div>

                            <div className="w-full">
                                <div className="relative">
                                    <input
                                        type={
                                            isPasswordVisible
                                                ? "text"
                                                : "password"
                                        }
                                        id="senha"
                                        name="senha"
                                        value={registerPassword}
                                        onChange={handleRegisterPasswordChange}
                                        className="w-full px-3 py-2 bg-transparent border border-indigo-500 rounded-lg"
                                        placeholder="Senha segura"
                                        required
                                        disabled={
                                            isRegisterFormActive ? false : true
                                        }
                                    />
                                    <button
                                        type="button"
                                        onClick={handlePasswordVisibility}
                                        className="absolute inset-y-0 right-0 flex items-center pr-2 duration-200 text-zinc-200 hover:text-zinc-400">
                                        {isPasswordVisible ? (
                                            <EyeSlash size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <button
                                className="w-full px-4 py-2 font-bold text-white duration-200 bg-indigo-500 rounded-lg hover:bg-indigo-700"
                                type="submit">
                                Criar Conta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
