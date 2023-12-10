import styles from './searchBar.module.css'
const SearchBar = () => {
    return (
        <div className={styles.searchBarSection}>
            <p className='text-center'>Find your new friend</p>
            <div className='flex justify-center'>
                <input type="text" className="w-3/5 p-2 h-fit" placeholder="Type something..." />
            </div>
            <div className='flex justify-center'>
                <button className='bg-purple-500 border-2 border-purple-900 w-1/5'>click</button>
            </div>
        </div>
    )
}

export default SearchBar