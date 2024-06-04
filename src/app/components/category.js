import Link from 'next/link'
import layout from './../page.module.css'

export default function Category ({tag}) {

  const first = tag.charAt(0).toUpperCase()
  const others = tag.slice(1)

  const word = first + others

  return (<>
      <span><Link href={`/category/${tag}`}>{word}</Link></span>
  </>)
}