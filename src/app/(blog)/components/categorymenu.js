import Link from "next/link"

export default function Categorymeny () {

  const categories = ["Wealth", "Investing", "Knowledge", "Stock Market", "Retirement", "Lifestyle"]

  return (<>
    {categories.map((item) => (<li key={item}><Link href={`/category/${item}`}>{item}</Link></li>))}
  </>)
}