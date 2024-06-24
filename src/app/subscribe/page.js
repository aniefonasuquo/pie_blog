'use client'

import styles from './page.module.css'
import Image from 'next/image'
import img1 from '../../../public/brand-logo.png'
import Link from 'next/link'


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
      <div className={styles.form}>
      <form onSubmit={handlesubmit}>
          <h1>Subscribe to Pie</h1>
          <input name='name' placeholder='Your Name' type='text'></input>
          <input name='email' placeholder='Your Email' type='email'></input>
          <button type='submit'>Subscribe</button>
        </form>
      </div>
      </div>
  </div>)
}