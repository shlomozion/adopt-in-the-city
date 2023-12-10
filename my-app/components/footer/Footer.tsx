import Logo from '../logo/Logo'
import styles from './footer.module.css'
const Footer = () => {
    return (
        <div className={styles.footer} >
            <footer className='grid grid-cols-2 gap-8 justify-between'>
                <section className='flex flex-col gap-4'>
                    <Logo />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </section>
                <section className={styles.footerLinks}>
                    <div>abc</div>
                    <div>def</div>
                </section>
            </footer>

        </div>
    )
}

export default Footer