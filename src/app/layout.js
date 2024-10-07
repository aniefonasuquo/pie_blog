import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import styles from './(blog)/page.module.css'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const eudoxus = localFont({src: "../../public/Eudoxus-Sans-main/Eudoxus-Sans-font/EudoxusSans-Regular.woff2"})



export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <main className={eudoxus.className}>
          {children}
        </main>
      </body>
    </html>
  );
}
