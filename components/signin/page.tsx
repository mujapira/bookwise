"use client";
import {signIn} from "next-auth/react";
import {useSearchParams} from "next/navigation";

const SignInPage = () => {
    const searchParams = useSearchParams();
    const callbackUrl:any = searchParams.get("callbackUrl");

    return (
        <section className="flex min-h-full pt-16 overflow-hidden sm:py-28">
            <div className="flex flex-col w-full max-w-2xl px-4 mx-auto sm:px-6">
                <div className="relative mt-12 sm:mt-16">
                    <h1 className="text-2xl font-medium tracking-tight text-center text-gray-900">
                        Sign in to your account
                    </h1>
                </div>
                <div className="flex-auto px-4 py-10 mt-10 -mx-4 bg-white shadow-2xl sm:rounded-5xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-24">
                    <form>
                        <div className="space-y-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="hello@me.com"
                                autoComplete="email"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            color="gray"
                            className="w-full mt-3">
                            Continue with email
                        </button>
                    </form>
                    <div className="flex items-center w-full mx-auto my-10 justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
                        or
                    </div>
                    <button
                        className="w-full"
                        onClick={() => signIn("google", {callbackUrl})}>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-icon="google"
                            className="w-5 mr-8"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 488 512">
                            <path
                                fill="red"
                                d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>
                        Continue with Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SignInPage;
