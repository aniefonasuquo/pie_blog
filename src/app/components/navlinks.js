import Link from "next/link"
import layout from '@/app/page.module.css'

export default function Navlinks () {

  return (<>
    <ul>
      <li><Link href='/'><span>Categories</span></Link></li>
      <li><Link href='/'>Opportunities</Link></li>
      <li><Link className={layout.search_button} href='/'><svg fill="bisque" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.764 20.476l-4.24-4.24a.81.81 0 0 0-1.144 0l-.218.219-1.465-1.465.192-.193a8.303 8.303 0 1 0-1.092 1.092l.193-.192 1.465 1.465-.219.218a.81.81 0 0 0 0 1.145l4.24 4.238a.808.808 0 0 0 1.143 0l1.145-1.143a.811.811 0 0 0 0-1.144zM9.496 16.8a7.241 7.241 0 0 1-5.155-2.137 7.299 7.299 0 1 1 10.775-.505L14.09 15.18a7.274 7.274 0 0 1-4.593 1.62zm11.552 5.121l-3.97-3.968.874-.873 3.97 3.968z"/><path fill="none" d="M0 0h24v24H0z"/></svg><span>Search</span></Link></li>
      <li><Link className={layout.join_link} href='/'>Join</Link></li>
      </ul>
  </>)
}