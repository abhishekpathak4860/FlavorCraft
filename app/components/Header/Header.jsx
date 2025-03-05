import Filter from '../Filter/Filter'
import Search from '../Search/Search'
import styles from './Header.module.css'

export default function Header({setSearch,setChoice}) {
    return (
        <div className={styles.header}>
        <Search setSearch={setSearch}/>
        <Filter setChoice={setChoice}/>
        </div>
    )
}
