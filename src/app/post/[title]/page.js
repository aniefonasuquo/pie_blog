import styles from './page.module.css'
import Image from 'next/image'
import img1 from '@/../public/img1.jpg'
import Recommended from '@/app/components/recommended'
import Category from '@/app/components/category'
import { getSinglePost } from '@/app/functions/functions'
import layout from '@/app/page.module.css'

export default async function Post ({params}) {

  const post = await getSinglePost(params.title)

  return (
  <div className=''>
    <div className={styles.top_section}>
      <div className={styles.top_section_left}>
        <div className={styles.category_container}>
          {post.tags.map((tag) => (
          <div className={layout.article_category} key={tag}>
              <Category tag={tag}></Category>
            </div>
            ))}
          </div>
        <h1>{post.title}</h1>
        <div>
          <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
            <li>Point 4</li>
            </ul>
          </div>
        <div>
          <span>5 Mins Read</span>
          <span>21 November 2024</span>
          </div>
        <div>Share</div>
        </div>
      <div className={styles.top_section_right}>
        <div className={styles.top_img_container}>
          <Image alt='image' src={img1} sizes='100vw' priority></Image>
          </div>
        </div>
      </div>
    <div className={styles.post}>
          {post.body}
      </div>
    {/* <div>Comment</div> */}
    <Recommended></Recommended>
    </div>)
}