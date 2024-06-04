import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css"
import Link from "next/link";
import logo from "../../public/brand-logo.png"
import Image from "next/image";
import localFont from 'next/font/local'
import Header from "./components/header";


const inter = Inter({ subsets: ["latin"] });
const eudoxus = localFont({src: "../../public/Eudoxus-Sans-main/Eudoxus-Sans-font/EudoxusSans-Regular.woff2"})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <div className={`${styles.globalcontent} ${eudoxus.className}`}>
            <Header></Header>
              <main>
                {children}
              </main>
            <footer>
              <div className={styles.footerContent}>
                <div className={styles.footersubscribe}>
                  <h2>Subscribe to New Post</h2>
                  <div>
                    <div>
                      <form>
                        <input type="email" placeholder="Your Email Address"></input>
                        <button type="submit">Subscribe</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className={styles.footerbuttom}>
                  <div className={styles.footerbuttom_top}>
                    <div className={styles.footerbuttom_logo_container}>
                      <div className={styles.logoContainer}><Link href='/'><Image alt="image" className={styles.logo} src={logo} sizes="100vw"></Image></Link></div>
                      <p>Win with you financial </p>
                    </div>
                    <div className={styles.footerbuttom_nav}>
                      <div className={styles.footernav_card}>
                        <h4>Social</h4>
                        <ul>
                          <li><Link href='/'>Twitter</Link></li>
                          <li><Link href='/'>Instagram</Link></li>
                          <li><Link href='/'>linkedin</Link></li>
                          <li><Link href='/'>Youtube</Link></li>
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
      </body>
    </html>
  );
}
