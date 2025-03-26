'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import layout from './../page.module.css'

export default function FooterSubmit () {

  const {register, handleSubmit} = useForm()
  const [subresponse, setresponse] = useState(0)

  async function submit (e) {

    setresponse(0)
    const res = await fetch(`/subscription/?email=${e.email}`, { cache: 'no-store'} )

    if (res.status == 200) {
      setresponse(1)
    } else {
      setresponse(2)
    }
  }
  
  return (
      <div className={layout.submitwrapper}>
      <form className={layout.footerInput} onSubmit={handleSubmit(submit)}>
        <input {...register('email')} type="email" placeholder="Your Email Address">
          </input>
          <button className={layout.footerSubmit} type="submit">{subresponse != 1? "Subscribe" : "Success!!"}</button>
        </form>
        <div>{subresponse == 2 && <span>oops! Something went wrong</span>}</div>
      </div>

  )
}