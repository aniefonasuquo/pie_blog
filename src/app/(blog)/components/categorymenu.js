import Link from "next/link"
import styles from '../page.module.css'

export default function Categorymeny () {

  const categories = ["Wealth", "Investing", "Knowledge", "Stock Market", "Retirement", "Lifestyle"]

  return (<>
    {categories.map((item) => (<li className={styles.categorylist} key={item}><Link href={`/category/${item}`}>{item}</Link></li>))}
  </>)
}