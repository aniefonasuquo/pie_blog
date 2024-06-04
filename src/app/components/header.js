'use client'

import Link from "next/link"
import layout from '@/app/page.module.css'
import logo from "@/../public/brand-logo.png"
import Image from "next/image"
import Navlinks from "./navlinks"
import { useState } from "react"

export default function Header () {

  const [mobileNav, setNav] = useState(0)
  const [catMenu, showCatMenu] = useState(0)

  function changeNav () {

    if (mobileNav == 1) {
      setNav(0)
    } else {
      setNav(1)
    }
  }

  function catMenuNav () {

    if (catMenu == 1) {
      showCatMenu(0)
    } else {
      showCatMenu(1)
    }
  }


  return (<>
    <header>
      <div className={layout.headerContainer}>
        <div className={layout.logoContainer}><Link href='/'><Image alt="image" className={layout.logo} src={logo} sizes="100vw"></Image></Link></div>
        <div className={layout.headerDiv2}>
          <div>
            <Navlinks></Navlinks>
            </div>
          </div>
        {mobileNav == 0 && 
        <div onClick={changeNav} className={layout.menubutton}>
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#ffe4c4" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 17H20M4 12H20M4 7H20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <g id="SVGRepo_iconCarrier"> <path d="M4 17H20M4 12H20M4 7H20" stroke="#ffe4c4" stroke-width="1.5" stroke-linecap="round" strokeLinejoin="round"/> </g>
          </svg>
          </div>
        }
        </div>
        {mobileNav == 1 &&    
        <div onClick={changeNav} className={layout.mobilemenu}>
        <div className={layout.closebutton}>        
        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#ffe4c4" xmlns="http://www.w3.org/2000/svg">
        <g id="Menu / Close_MD"><path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#ffe4c4" stroke-width="2" stroke-linecap="round" strokeLinejoin="round"/></g>
          </svg>
          </div>
            <div className={layout.mobileNav}>
              <ul>
                <li onClick={catMenuNav}>Categories</li>
                <li><Link href='/'>Opportunities</Link></li>
                <li>
                  <div>
                    <Link href='/'><span className={layout.join_small_link}>Join</span></Link>
                    </div>
                  </li>
                </ul>
                </div> 
          </div>
        }
      </header>
  </>)
}