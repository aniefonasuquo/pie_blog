import Link from "next/link"
import styles from '../page.module.css'

export default function Categorymenu () {

  const categories = ["Wealth", "Investing", "Knowledge", "Stock Market", "Retirement", "Lifestyle"]

  return (<>
    {categories.map((item) => (<li className={styles.categorylist} key={item}><a href={`/category/${item}`}>{item}</a></li>))}
  </>)
}