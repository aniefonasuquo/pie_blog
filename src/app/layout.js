import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import styles from './(blog)/page.module.css'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const eudoxus = localFont({src: "../../public/Eudoxus-Sans-main/Eudoxus-Sans-font/EudoxusSans-Regular.woff2"})

// export const metadata = {
//   title: 'Pie Wealth Blog - Get Informed on The Right Wealth Decision',
//   description: 'Gain insight to help you make right wealth decisions fit for your dreams',
//   openGraph: {
//     title: 'Pie Wealth Blog - Get Informed on The Right Wealth Decision',
//     description: 'Gain insight to help you make right wealth decisions fit for your dreams',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: `Pie Wealth Blog - Get Informed on The Right Wealth Decision`,
//     description: 'Gain insight to help you make right wealth decisions fit for your dreams',
//     // images: [post.image_link], // Must be an absolute URL
//   }
// }

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
