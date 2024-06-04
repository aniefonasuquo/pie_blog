'use client'

import ArticleCard from "./articlecard"
import { useState } from "react";
import styles from './loop.module.css'
import layout from '../page.module.css'

export default function LoopSection ({data}) {
  
  const [limit, setLimit] = useState(6)

  function changeLimit (e) {

    e.preventDefault()

    setLimit(limit => limit + 6)
  }
  
  let post = data.slice(0, limit)

  return (<>
    <div className={styles.loop_section_wrap}>
      <ArticleCard data={post}></ArticleCard>         
      </div>
    <div className={layout.pagination_section}>
      <button onClick={changeLimit}>Load More</button>
      </div>   
  </>

  )
}