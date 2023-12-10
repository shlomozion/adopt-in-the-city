"use client"

import { signOut } from "next-auth/react"

const SignOutBtn = () => {
    return (
        <div>
            <button type="button" onClick={() => signOut()}>
                signout
            </button>


        </div>

    )
}

export default SignOutBtn   