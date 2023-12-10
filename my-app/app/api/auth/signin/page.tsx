import SignInBtn from '@/components/topbar/auth/button/SignInBtn'
import { auth } from '@/app/auth'
import { redirect } from 'next/navigation'

const page = async () => {
    const session = await auth()
    if (session) {
        redirect('/')
    } else {
        return (
            <div className='bg-purple-400 h-screen flex w-full justify-center items-center' >
                <div className='shadow-red-500 shadow-lg  w-2/4 flex flex-col justify-center bg-slate-600 p-4 rounded-xl'>
                    <div className='text-center text-lg text-white'>
                        Log In
                    </div>
                    <div className=''>
                        <SignInBtn />
                    </div>
                </div>
            </div >
        )
    }


}

export default page