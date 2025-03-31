'use client'

import Link from "next/link"
import layout from './../page.module.css'
import logo from "@/../public/brand-logo.png"
import Image from "next/image"
import Navlinks from "./navlinks"
import { useState, useRef, useEffect } from "react"
import Categorymenu from "./categorymenu"

export default function Header () {

  const [mobileNav, setNav] = useState(0)
  const [categorymenu, setcategorymenu] = useState(0)
  const [catmenu, setcatmenu] = useState(0)
  const modal = useRef()

  useEffect((e) => {
  }, [])

  function changeNav () {

    if (mobileNav == 1) {
      setNav(0)
    } else {
      setNav(1)
      setcategorymenu(0)
    }
  }

  function showcategorymenu () {

    if (categorymenu == 1) {
      setcategorymenu(0)
    } else {
      setcategorymenu(1)
    }

  }

  function showmodal () {
    modal.current.showModal()
  }

  function closemodal () {
    modal.current.close()
  }

  function showCat () {
    catmenu == 1 ? setcatmenu(0) : setcatmenu(1)
  }

  return (<>
      <div className={layout.headerContainer}>
        <div className={layout.logoContainer}><Link href='/'><Image alt="image" className={layout.logo} src={logo} sizes="100vw"></Image></Link></div>
        <div className={layout.headerDiv2}>
          <div>
            <ul className={layout.nav}>
              <li className={layout.navshow}>
                <span onClick={showCat}>Categories</span>
                  {catmenu == 1 && <ul className={layout.category_dropdwon}>
                    <Categorymenu></Categorymenu>
                    </ul>}            
                </li>
              <li className={layout.navshow}><Link href='/'>Opportunities</Link></li>
              <li className={layout.navshow}>
                <div className={layout.search_button} onClick={showmodal}>
                  <svg fill="bisque" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.764 20.476l-4.24-4.24a.81.81 0 0 0-1.144 0l-.218.219-1.465-1.465.192-.193a8.303 8.303 0 1 0-1.092 1.092l.193-.192 1.465 1.465-.219.218a.81.81 0 0 0 0 1.145l4.24 4.238a.808.808 0 0 0 1.143 0l1.145-1.143a.811.811 0 0 0 0-1.144zM9.496 16.8a7.241 7.241 0 0 1-5.155-2.137 7.299 7.299 0 1 1 10.775-.505L14.09 15.18a7.274 7.274 0 0 1-4.593 1.62zm11.552 5.121l-3.97-3.968.874-.873 3.97 3.968z"/><path fill="none" d="M0 0h24v24H0z"/></svg><span>Search</span></div>
                </li>
              <li className={layout.hidenav} onClick={showmodal}>
                <svg fill="bisque" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.764 20.476l-4.24-4.24a.81.81 0 0 0-1.144 0l-.218.219-1.465-1.465.192-.193a8.303 8.303 0 1 0-1.092 1.092l.193-.192 1.465 1.465-.219.218a.81.81 0 0 0 0 1.145l4.24 4.238a.808.808 0 0 0 1.143 0l1.145-1.143a.811.811 0 0 0 0-1.144zM9.496 16.8a7.241 7.241 0 0 1-5.155-2.137 7.299 7.299 0 1 1 10.775-.505L14.09 15.18a7.274 7.274 0 0 1-4.593 1.62zm11.552 5.121l-3.97-3.968.874-.873 3.97 3.968z"/><path fill="none" d="M0 0h24v24H0z"/></svg>
                </li>
              <li className={layout.navshow}><Link className={layout.join_link} href='/subscribe'>Subscribe</Link></li>
              <li>
                <div onClick={changeNav} className={layout.menubutton}>{mobileNav == 0 &&
                  <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#ffe4c4" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 17H20M4 12H20M4 7H20" stroke="#000000" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <g id="SVGRepo_iconCarrier"> <path d="M4 17H20M4 12H20M4 7H20" stroke="#ffe4c4" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round"/> </g>
                    </svg>}
                    </div>  
                </li>          
              </ul>
            </div>
          {mobileNav == 1 &&
          <div className={layout.mobilemenu}>
            <div onClick={changeNav} className={layout.closebutton}>        
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#34365e" xmlns="http://www.w3.org/2000/svg">
                <g id="Menu / Close_MD"><path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#34365e" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/></g>
                </svg>
              </div>
            <div className={layout.mobileNav}>
              <ul>
                <li onClick={showcategorymenu}>Categories</li>
                {categorymenu == 1 && <Categorymenu></Categorymenu>}
                <li><Link href='/'>Opportunities</Link></li>
                </ul>   
              </div> 
            <Link href='/subscribe'><div className={layout.mobile_menu_subscribe}>Subscribe</div></Link>
            </div>}
          </div>

          <dialog ref={modal} className={layout.headersearch}>
            <div className={layout.searchwrap}>
              <div className={layout.searchdialogue}>
                <input className={layout.searchinput} type="text"></input>
              <div onClick={closemodal}>        
              <svg width="40px" height="40px" viewBox="0 0 24 24" fill="#ffe4c4" xmlns="http://www.w3.org/2000/svg">
              <g id="Menu / Close_MD"><path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#ffe4c4" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"/></g>
              </svg>
                </div>
                </div>
              <div>Search results</div>
              </div>
            </dialog>
        </div>
  </>)}