import SectionTitle from "../../components/sectionTitle/sectionTitle";

//styles
import styles from './instgram.module.scss';

const Instagram = () => {
    return(
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle titletext="portfolio" emoji="📸" />
                    </div>
                </div>
                <div className={`row d-flex justify-content-center align-items-end ${styles.mb_65}`}>
                    <div className="col-md-5">
                        <div className={styles.imgBlock}>
                            <img src="/images/ig/ig1.png" alt="Instagram feed" />
                        </div>
                        <div className={styles.imgBlock}>
                            <img src="/images/ig/ig2.png" alt="Instagram feed" />
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className={styles.imgBlock}>
                            <img src="/images/ig/ig3.png" alt="Instagram feed" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.imgBlock}>
                            <img src="/images/ig/ig4.png" alt="Instagram feed" />
                        </div>
                        <div className={styles.imgBlock}>
                            <img src="/images/ig/ig5.png" alt="Instagram feed" />
                        </div>
                        <div className={styles.imgBlock}>
                            <img src="/images/ig/ig6.png" alt="Instagram feed" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instagram;