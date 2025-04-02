'use client'

import Link from "next/link";
import img1 from '../../../../public/img1.jpg'
import styles from '../page.module.css'
import Category from "./category";
import Image from "next/image";
import { Suspense } from "react";
import Thumbnail from "./thumbnail";

export function splitWords(sentence) {

  let words = sentence.split(' ', 30)
  let preview = ""
  
  for (let i = 0; i < words.length; i++) {
    preview += `${words[i]} `
  }

  return preview

}

export default function FeatureCard ({data}) {

  function moveleft () {

  }

  function moveright () {

  }
  
  // style={{ transform: `translateX(${isShifted ? "-30px" : "0"})` }}

  return (
    <div className={styles.featured_section_wrap}>
    <div className={styles.featured_section_top}>
      <h2 className={styles.LandingSectionHeading}>Get started with our best articles</h2>
      <div className={styles.scroll_toggle}>
        <button onClick={moveleft}>Prev</button>
        <button onClick={moveright}>Next</button>
      </div>
    </div>
  <div className={styles.featured_row}>
  <div className={styles.featured_scroll}>
        {
            data.map(({_id, title, tags, content, featured_image, image_link, excerpt, slug}) => (          
            <div className={styles.feature_card_wrap} key={_id}>
              <div className={styles.featured_img_container}>
                <Suspense fallback={<div className={styles.greyload}></div>}>
                  <Thumbnail slug={slug} image_link={image_link} featured_image={featured_image}></Thumbnail>
                </Suspense>
                <div className={styles.article_category_container}>
                  {
                    tags.map(tag => (<div className={styles.article_category} key={tag}>
                       <Category tag={tag}></Category>
                    </div>
                  ))
                  }
                </div>
              </div>
              <div className={styles.article_brief_container}>
                <Link href={`/post/${slug}`}>
                  <h3 className={styles.LandingArticleHeading}>{title}</h3>
                   <p>{`${splitWords(excerpt)}...`}</p>
                </Link>
              </div>
            </div>))} 
  </div>
  </div>
  </div>)
}