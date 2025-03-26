import { Inter } from "next/font/google";
import styles from "./page.module.css"
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: 'Pie Wealth Blog - Get Informed on The Right Wealth Decision',
  description: 'Gain insight to help you make right wealth decisions fit for your dreams',  
  openGraph: {
    title: 'Pie Wealth Blog - Get Informed on The Right Wealth Decision',
    description: 'Gain insight to help you make right wealth decisions fit for your dreams',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Pie Wealth Blog - Get Informed on The Right Wealth Decision`,
    description: 'Gain insight to help you make right wealth decisions fit for your dreams',
    // images: [post.image_link], // Must be an absolute URL
  }
}

export default function BlogLayout({ children }) {


  return (
          <div className={styles.globalcontent} >
            <header>
              <Header></Header>
              </header>
                {children}
            <footer>
              <Footer></Footer>
              </footer>
            </div>
  );
}
