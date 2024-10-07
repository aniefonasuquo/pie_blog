
import styles from './page.module.css'
import Image from 'next/image'
import img1 from '../../../public/brand-logo.png'
import Link from 'next/link'
import Submit from './submit'

export const metadata = {
  title: 'Subscribe to Pie Wealth Blog',
  openGraph: {
    title: 'Subscribe to Pie Wealth Blog',
    description: 'Resources that help you make the right wealth decisions',
  },
}

export default function SubscribePage () {

  function handlesubmit(e) {

    e.preventDefault()

    const data = new FormData(e)
    console.log(data)

  }

  return (
  <div className={styles.wrapper}>
    <div className={styles.left}>

      </div>
    <div className={styles.right}>
      <div className={styles.logo}>        
        <div className={styles.logowrap}>
        <Link href={'/'}>
          <Image alt='h' src={img1} sizes="100vw"></Image>
        </Link>
        </div>
      </div>
        <Submit></Submit>
      </div>
  </div>)
}