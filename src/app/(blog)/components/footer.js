import Link from 'next/link'
import Image from 'next/image'
import styles from './../page.module.css'
import FooterSubmit from './footersubmit'
import logo from "./../../../../public/brand-logo.png"
import localFont from 'next/font/local'

export default function Footer() {

  return (<>
            <div className={styles.footerContent}>
              <div className={styles.footersubscribe}>
                <h1>Subscribe to New Posts.</h1>
                <FooterSubmit></FooterSubmit>
                </div>
              <div className={styles.footerbuttom}>
                <div className={styles.footerbuttom_top}>
                  <div className={styles.footerbuttom_logo_container}>
                    <div className={styles.logoContainer}><Link href='/'><Image alt="image" className={styles.logo} src={logo} sizes="100vw"></Image></Link></div>
                      <p>Helps individuals make the best decisions, suitable for achieving unique wealth objectives.</p>
                      </div>
                  <div className={styles.footerbuttom_nav}>
                    <div className={styles.footernav_card}>
                      <h3>Social</h3>
                      <ul className={styles.socials}>
                        <li><Link href='https://x.com/piewealth' target="_blank">Twitter</Link></li>
                        <li><Link href='https://www.instagram.com/wealth.pie/' target="_blank">Instagram</Link></li>
                        <li><Link href='/https://www.linkedin.com/company/pie-wealth' target="_blank">linkedin</Link></li>
                        <li><Link href='/' target="_blank">Youtube</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                <div className={styles.footerbuttom_down}>
                  <p>© Cleva Platforms Nigeria Limited {new Date().getFullYear()}.</p>
                  </div>
                </div>
              </div>  
  </>)
}