import styles from './Filter.module.css'

export default function Filter({setChoice}) {
    const handleFilterClick=(category)=>{
        setChoice(category)
        console.log(category);
    }
    return (
        <>
            <div className={styles.select_button}>
                <ul>
                    <li onClick={()=>handleFilterClick("All")}>All</li>
                    <li onClick={()=>handleFilterClick("Breakfast")}>Breakfast</li>
                    <li onClick={()=>handleFilterClick("Lunch")}>Lunch</li>
                    <li onClick={()=>handleFilterClick("Dinner")}>Dinner</li>
                </ul>
            </div>
        </>
    )
}
