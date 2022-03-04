import styles from './Loader.module.css';

export default function Loader(props){
    return(
        <div className={styles.wrapperLoader}>
            <div className={styles['loadingio-spinner-ripple-ov8s088nv9t']}>
                <div className={`${styles['ldio-d20187tezng']}`}>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}