import Link from "next/link";
const SignInLink = () => {

    return (
        <div className="p-4">
            <Link
                className='bg-blue-200 border-2 border-blue-950'
                href="api/auth/signin?callbackUrl=/">
                Log in
            </Link>
        </div>
    )
}

export default SignInLink