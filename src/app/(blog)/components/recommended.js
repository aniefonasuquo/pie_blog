import layout from './../page.module.css'
import Image from 'next/image'
import Link from 'next/link'
import img1 from '../../../../public/img1.jpg'
import { getRecommededPosts } from '../functions/functions'


export default async function Recommended () {

  const data = await getRecommededPosts()

  return (<>
    <div className={layout.recommended_section}>
      <h3>Recommended</h3>
      <div className={layout.recommended_section_row}>
        {data.map(({_id, title, image_link, featured_image, slug}) => (
        <div className={layout.recom_article_card_wrap} key={_id}>
          <Link href={`/post/${slug}`}>
          <div className={layout.article_img_container}>
              <Image alt="image" className={layout.featured_post_img} src={image_link} height={featured_image.height} width={featured_image.width} sizes="100vw"></Image>
          </div>
          <div className={layout.article_brief_container}>
              <h4>{title}</h4>
          </div>            
          </Link>
        </div>
        ))}
      </div>
    </div>
  </>)
}