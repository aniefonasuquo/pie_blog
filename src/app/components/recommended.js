import layout from './../page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../../public/img1.jpg'

export default function Recommended () {
  return (<>
    <div className={layout.recommended_section}>
      <h3>Recommended</h3>
      <div className={layout.recommended_section_row}>
        <div className={layout.recom_article_card_wrap}>
          <div className={layout.article_img_container}>
              <Image alt="image" className={layout.featured_post_img} src={img1} sizes="100vw"></Image>
          </div>
          <div className={layout.article_brief_container}>
              <h4>New Technology is Not Good In and Of itself</h4>
          </div>
        </div>
      </div>
    </div>
  </>)
}