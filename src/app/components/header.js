import Link from "next/link"
import layout from '@/app/page.module.css'
import logo from "@/../public/brand-logo.png"
import Image from "next/image"
import Navlinks from "./navlinks"

export default function Header () {
  return (<>
    <header>
      <div className={layout.headerContainer}>
        <div className={layout.logoContainer}><Link href='/'><Image alt="image" className={layout.logo} src={logo} sizes="100vw"></Image></Link></div>
        <div className={layout.headerDiv2}>
          <div>
            <Navlinks></Navlinks>
            </div>
          </div>
        <div className={layout.menubutton}>
        <svg width="50px" height="50px" viewBox="0 0 24 24" fill="#ffe4c4" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17H20M4 12H20M4 7H20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <path d="M4 17H20M4 12H20M4 7H20" stroke="#ffe4c4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> </g>
          </svg>
          </div>
        </div>
      <div className={layout.mobilenav}>
        <Navlinks></Navlinks>
        </div>
      </header>
  </>)
}