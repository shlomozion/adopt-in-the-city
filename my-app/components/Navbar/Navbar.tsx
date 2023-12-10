import { navbarLinks } from '@/constants/index'

const Navbar = () => {
    return (
        <div className='shadow-2xl shadow-yellow-950 fixed bottom-0 bg-[#564E3D] flex gap-1 justify-evenly  max-lg:w-full lg:hidden'  >
            {navbarLinks.map((item) =>
                <div className='flex flex-col items-center justify-center group w-full hover:bg-slate-200 hover:rounded-lg hover:bg-opacity-5  pt-2'>
                    <svg className='stroke-none flex justify-center fill-white group-hover:fill-[#FCC673]' width={30} height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                        {item.icon}
                    </svg>
                    <span className='text-white group-hover:text-[#FCC673]'>{item.label}</span>
                </div>
            )}
        </div>
    )
}

export default Navbar