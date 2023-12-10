"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

const SignInBtn = () => {
    return (
        <div className="flex justify-center">
            <button
                onClick={() => signIn("google", { callbackUrl: '/' })}
                className="bg-black hover:bg-gray-900   text-white p-3 grid grid-flow-col rounded-lg items-center gap-2">
                <Image src={'/googleButtonIcon.png'} alt="signInImg" height={40} width={47} />
                <div className="text-sm font-semibold">Sign in with Google</div>
            </button>
        </div>
    )
}

export default SignInBtn