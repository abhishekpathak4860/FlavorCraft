import styles from './Box.module.css'

export default function Box({name,price,text,image}) {
    return (
        <>
                <div className={styles.firstBox} key={name}>
                    <div className={styles.sub1}>
                        <img src={image} />
                        <div className={styles.title}>
                            <h2>{name}</h2>
                            <p>{text}</p>
                        </div>
                    </div>
                    <div className={styles.sub2}>{price}</div>
                </div> 
        </>
    )
}
