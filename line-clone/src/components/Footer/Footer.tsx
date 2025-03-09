import styles from './Footer.module.css';
import { FaApple, FaGooglePlay, FaDesktop, FaWindows, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <nav className={`${styles.links} ${styles.downloadLinks}`}>
          <img 
            src="/images/mainServices/icon-line.png"
            alt="Line Logo"
            width="40"
            height="40"
            loading="eager"
            className={styles.logo}
          />
          <a href="/download/app-store" className={styles.downloadLink}><FaApple /><span>App Store</span></a>
          <div className={styles.verticalDivider}></div>
          <a href="/download/google-play" className={styles.downloadLink}><FaGooglePlay /><span>Google Play</span></a>
          <div className={styles.verticalDivider}></div>
          <a href="/download/desktop" className={styles.downloadLink}><FaDesktop /><span>Desktop</span></a>
          <div className={styles.verticalDivider}></div>
          <a href="/download/windows" className={styles.downloadLink}><FaWindows /><span>Windows Store</span></a>
          <div className={styles.verticalDivider}></div>
          <a href="/download/chrome" className={styles.downloadLink}><span>Chrome</span></a>
          <div className={styles.verticalDivider}></div>
          <a href="/download/apk" className={styles.downloadLink}><span>APK</span></a>
          <div className={styles.verticalDivider}></div>
          <a href="/download/screensaver" className={styles.downloadLink}><span>Screen Saver</span></a>
        </nav>
        <hr className={styles.divider} />
        <nav className={`${styles.links} ${styles.bottomLinks}`}>
          <div className={styles.leftLinks}>
            <a href="/help">LY Corporation</a>
            <div className={styles.verticalDivider}></div>
            <a href="/help">Help</a>
            <div className={styles.verticalDivider}></div>
            <a href="/terms">User Agreement</a>
            <div className={styles.verticalDivider}></div>
            <a href="/privacy">Privacy Policy</a>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://youtube.com/lineapp" className={styles.socialIcon}><FaYoutube /></a>
            <a href="https://facebook.com/lineapp" className={styles.socialIcon}><FaFacebook /></a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
