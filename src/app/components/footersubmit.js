'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"

export default function FooterSubmit () {

  const {register, handleSubmit} = useForm()
  const [subresponse, setresponse] = useState(0)

  async function submit (e) {

    setresponse(0)
    const res = await fetch(`/subscription/?email=${e.email}`, { cache: 'no-store'} )

    console.log(e)

    if (res.status == 200) {
      setresponse("Success! Please check your email to confirm subscription")
    } else {
      setresponse("Something went wrong")
    }
  }
  
  return (
      <div>
      <form onSubmit={handleSubmit(submit)}>
        <input {...register('email')} type="email" placeholder="Your Email Address"></input>
        <button type="submit">Subscribe</button>
        </form>
      {subresponse != 0 &&<div>{subresponse}</div>}  
      </div>

  )
}