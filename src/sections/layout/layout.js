//styles
import styles from './layout.module.scss';

const Layout = () => (
  <>
    <main className={styles.main}>
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <div className={styles.element}>
                       Coming Soon
                    </div>
                </div>
            </div>
        </div>
    </main>
  </>
);

export default Layout;
