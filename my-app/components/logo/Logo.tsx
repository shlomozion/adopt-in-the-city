import Image from 'next/image'


const Logo = () => {
    return (
        <div className='flex px-2 items-center'>
            <div className=''>
                <Image loading='eager' priority src='/assets/app-logo.png' alt='app-logo' height={300} width={80} />
            </div>
        </div>
    )
}

export default Logo