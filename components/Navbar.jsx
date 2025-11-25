import logo from "../assets/logo.png";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      role="tablist"
      aria-label="Professional matches navigation"
      className={styles.navbarContainer}
    >
      <div className={styles.navbarItems}>
        <div className={styles.navbarLeftContainer}>
          <div className={styles.logoContainer}>
            <Image
              src={logo}
              alt="logo"
              className={styles.mainLogo}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/en/gb/";
              }}
              width={24}
              height={24}
              unoptimized
            />

            <div className={styles.serviceContainer}>
              <span className={styles.serviceText}>Explore Our Services</span>
              <span className={styles.serviceTextMobile}>Our Services</span>
            </div>
          </div>
        </div>

        <div className={styles.logsBtns}>
          <Link href="/login" className={`${styles.loginBtn} ${styles.link}`}>
            Login
          </Link>

          <Link href="/sellers/create" className={styles.professionalBtn}>
            Join as a Professional
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
