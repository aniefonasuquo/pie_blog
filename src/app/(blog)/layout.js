import { Inter } from "next/font/google";
import styles from "./page.module.css"
import Link from "next/link";
import logo from "./../../../public/brand-logo.png"
import Image from "next/image";
import localFont from 'next/font/local'
import Header from "./components/header";
import FooterSubmit from "./components/footersubmit";


export default function BlogLayout({ children }) {
  return (
          <div className={styles.globalcontent} >
            <header>
              <Header></Header>
            </header>
                {children}
            <footer>
              <div className={styles.footerContent}>
                <div className={styles.footersubscribe}>
                  <h1>Subscribe to New Posts.</h1>
                  <FooterSubmit></FooterSubmit>
                  </div>
                <div className={styles.footerbuttom}>
                  <div className={styles.footerbuttom_top}>
                    <div className={styles.footerbuttom_logo_container}>
                      <div className={styles.logoContainer}><Link href='/'><Image alt="image" className={styles.logo} src={logo} sizes="100vw"></Image></Link></div>
                      <p>Helps individuals invest in the right investment opportunities that suit their unique wealth desires.</p>
                    </div>
                    <div className={styles.footerbuttom_nav}>
                      <div className={styles.footernav_card}>
                        <h3>Social</h3>
                        <ul>
                          <li><Link href='https://x.com/piewealth' target="_blank">Twitter</Link></li>
                          <li><Link href='https://www.instagram.com/wealth.pie/' target="_blank">Instagram</Link></li>
                          <li><Link href='/https://www.linkedin.com/company/pie-wealth' target="_blank">linkedin</Link></li>
                          <li><Link href='/' target="_blank">Youtube</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className={styles.footerbuttom_down}>
                    <p>© Cleva Platforms Nigeria Limited 2024.</p>
                  </div>
                </div>
              </div>
            </footer>
        </div>
  );
}
