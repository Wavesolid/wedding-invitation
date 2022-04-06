import styles from './Loader.module.css';

export default function Loader(props){
    return(
        <div>
            <div className={styles.backdrop}></div>
            <div className={styles.wrapperLoader}>
                <div className={styles['loadingio-spinner-ripple-d36lm6y3xwl']}>
                    <div className={`${styles['ldio-t7qjp5awsh']}`}>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}