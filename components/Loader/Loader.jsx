import styles from './Loader.module.css';

export default function Loader(props){
    return(
        <div>
            <div className={styles.backdrop}></div>
            <div className={`${styles.wrapperLoader} ${props.positionBox}`}>
                <div className={styles.loader}>
                </div>
            </div>
        </div>
    )
}