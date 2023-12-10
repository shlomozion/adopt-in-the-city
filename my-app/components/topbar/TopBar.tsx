import styles from '@/components/topbar/topBar.module.css'
import Logo from '../logo/Logo'
import { auth } from '@/app/auth'
import UserMenu from './auth/user/UserMenu'
import SignInLink from './auth/SignInLink'




const TopBar = async () => {
    const session = await auth()

    return (
        <div className={styles.topBar}>
            <section className='w-full h-20 flex justify-between border-2 border-black'>
                <Logo />
                {/* <section className=''>
                    {session ?
                        (<UserMenu session={session} />)
                        :
                        (<SignInLink />)}
                </section> */}
            </section>
        </div>
    )
}

export default TopBar