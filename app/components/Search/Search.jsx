import styles from './Search.module.css'

export default function Search({setSearch}) {
    return (
        <><div className={styles.top_content}>
            <div className={styles.logo}>F<span>o</span><span>o</span>dy Z<span>o</span>ne</div>
            <div className={styles.search}>
                <input type="text" placeholder='search food...' onChange={(e)=>{
                    setSearch(e.target.value)
                }}/>
            </div>
        </div></>
    )
}
