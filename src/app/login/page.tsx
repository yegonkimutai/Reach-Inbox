"use client";

import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-md w-95 text-center">
                <h1 className="text-2xl font-bold mb-2">Login</h1>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                    className="w-full flex items-center justify-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-50"
                >
                 <img src="/google.svg" className="h-5" />
                    Continue with Google
                </button>
            </div>
        </div>
    )
}
