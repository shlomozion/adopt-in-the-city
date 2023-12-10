import WelcomeHeader from '@/components/homePage/welcomeHeader/WelcomeHeader'
import styles from './homePage.module.css'
import SearchBar from '@/components/homePage/searchBar/SearchBar'
// import PawLayout from '@/components/Background/PawLayout'


export default async function Home() {

  return (
    <main className={styles.homePage}>
      {/* <PawLayout /> */}
      <WelcomeHeader />
      <SearchBar />

    </main>

  )
}
