import styles from './Loader.module.css';

export default function Loader(){
    return(
        <div>
            <div className={styles.backdrop}></div>
            <div className={styles.wrapperLoader}>
                <div className={styles.loader}>
                </div>
            </div>
        </div>
    )
}