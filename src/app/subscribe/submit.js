'use client'

import { useForm } from "react-hook-form"
import { useState } from "react"
import styles from './page.module.css'

export default function Submit () {

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
    <div className={styles.form}>
    <form onSubmit={handleSubmit(submit)}>
        <h1>Subscribe to Pie</h1>
        <input {...register} name='name' placeholder='Your Name' type='text'></input>
        <input {...register('email')} name='email' placeholder='Your Email' type='email'></input>
        <button type='submit'>{subresponse != 1? "Subscribe" : "Success!!"}</button>
      </form>
    </div>
  )
}