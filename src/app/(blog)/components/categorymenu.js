import Link from "next/link"
import styles from '../page.module.css'

export default function Categorymenu () {

  const categories = ["Wealth", "Investing", "Knowledge", "Stock Market", "Retirement", "Lifestyle"]

  return (<><ul className={styles.categorylist}>
    {categories.map((item) => (<li key={item}><a href={`/category/${item}`}>{item}</a></li>))}
  </ul>
  </>)
}