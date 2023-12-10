import React from 'react'
import styles from './welcomeHeader.module.css'
import Image from 'next/image'

const WelcomeHeader = () => {
    return (
        <div className={styles.welcomeHeader}>
            {/* <section className='grid gap-6 p-4 '>
                <section className='grid grid-cols-2'>
                    <p className='flex items-center'>Adopt with confidence</p>
                    <div className='flex justify-center '>
                        <Image className='rounded' src={'/Brindle-boxer.jpg'} alt='pet-image' height={400} width={500} />
                    </div>
                </section>
                <section>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
                </section>
            </section> */}
        </div>
    )
}

export default WelcomeHeader