// data
import { footerData } from './footerData';

// styles
import styles from './footer.module.scss';

const Footer = () => (
  <footer className={`position-relative w-full ${styles.pt141}`}>
      <div className={styles.bgAsImg}>
          <img src="/images/bgs/footer.svg" alt="footer background" />
      </div>
    <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center">
            <div className={styles.footerLogo}>
                <img src={footerData.imageUrl} alt="Proper Bookings" />
            </div>
            <div className={styles.footerMenu}>
                {footerData.menus.map((menu, index) => (
                    <a key={index} href="#!" className={styles.footerMenuLink}>
                        {menu}
                    </a>
                ))}
            </div>
            <div className={styles.copyright}>
                <p>{footerData.copyright}</p>
            </div>
        </div>
    </div>
  </footer>
);

export default Footer;
