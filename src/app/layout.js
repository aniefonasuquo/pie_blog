import { Inter } from "next/font/google";
import localFont from 'next/font/local'
import styles from './(blog)/page.module.css'
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const eudoxus = localFont({src: "../../public/Eudoxus-Sans-main/Eudoxus-Sans-font/EudoxusSans-Regular.woff2"})

// export const metadata = {
//   title: 'Pie Wealth Blog - The Right Resources to Improve Your Wealth',
//   openGraph: {
//     title: 'Pie Wealth Blog - The Right Resources to Improve Your Wealth',
//     description: 'Make the right wealth decisions fit for your dreams',
//   },
//   twitter: {
//     card: 'summary_large_image',
//     title: `Pie Wealth Blog - The Right Resources to Improve Your Wealth `,
//     description: 'Make the right wealth decisions fit for your dreams',
//     // images: [post.image_link], // Must be an absolute URL
//   }
// }

export async function generateMetadata({ params, searchParams }, parent) {
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: 'Pie Wealth Blog - The Right Resources to Improve Your Wealth',
    openGraph: {
      title: 'Pie Wealth Blog - The Right Resources to Improve Your Wealth',
      description: 'Make the right wealth decisions fit for your dreams',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Pie Wealth Blog - The Right Resources to Improve Your Wealth `,
      description: 'Make the right wealth decisions fit for your dreams',
      // images: [post.image_link], // Must be an absolute URL
    }
  }
}

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
