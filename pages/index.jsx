import styles from '../styles/Index.module.css';
import Cover from './Cover/Cover.jsx';
import Intro from './Intro/Intro.jsx';
import Surat from './Surat/Surat.jsx';

export default function index()
{
    return (
        <div>
            <div className={styles.pageWrapper}>
                <div className={styles.bannerWrapper}>
                    Foto Banner
                </div>
            </div>

            <div className={styles.columnMain}>
                <Cover/>
                <Intro/>
                <Surat/>
            </div>
        </div>

    );
}