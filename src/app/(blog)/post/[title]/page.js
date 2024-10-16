import styles from './page.module.css'
import Image from 'next/image'
import img1 from '@/../public/img1.jpg'
import Recommended from '../../components/recommended'
import Category from '../../components/category'
import { getSinglePost } from '../../functions/functions'
import layout from './../../page.module.css'
import Sharing from '../../components/share'

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params

  const post = await getSinglePost(params.title)
  // console.log(post)
 
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  console.log(post.image_link)
 
  return {
    title: `${post.title} - Pie Wealth Blog`,
    description: 'Subscribe to get access to resources that help you make the right wealth decisions',
    openGraph: {
      title: `${post.title} - Pie Wealth Blog`,
      images: [
        {
          url: post.image_link, // Must be an absolute URL
          width: 1200,
          height: 628,
        },],
      description: 'Subscribe to get access to resources that help you make the right wealth decisions',
      url: 'https://blog.usepie.ng',
      siteName: 'Pie Wealth Blog',
    },
    twitter: {
      card: post.image_link,
      title: `${post.title} - Pie Wealth Blog`,
      description: 'Subscribe to get access to resources that help you make the right wealth decisions',
      images:  [
        {
          url: post.image_link, // Must be an absolute URL
          width: 1200,
          height: 628,
        },], // Must be an absolute URL
    },
    other: {
      custom: 'meta',
    },
  }
}

export default async function Post ({params}) {
   
  const post = await getSinglePost(params.title)

  const wordcount = 5
  const published = new Date(post._created)

  console.log(published)

  return (
  <div className=''>
    <div className={styles.top_section}>
      <div className={styles.top_section_left}>
        <div className={styles.category_container}>
          {post.tags.map((tag) => (
          <div className={layout.post_category} key={tag}>
              <Category tag={tag}></Category>
            </div>
            ))}
          </div>
        <h1>{post.title}</h1>
        <div>
          <ul className={styles.highlights}>
            {post.highlights.map((item) => (
              <li key={item}>{item}.</li>
            ))}
            </ul>
          </div>
        <div>
          <span>5 Mins Read . {published.toDateString()}</span>
          </div>
        <div className={styles.share}><Sharing url={`https://blog.usepie.ng/post/${post.slug}`} title={post.title}></Sharing></div>
        </div>
      <div className={styles.top_section_right}>
        <div className={styles.top_img_container}>
          <Image alt='image' src={post.image_link} height={post.featured_image.height} width={post.featured_image.width} sizes='100vw' priority></Image>
          </div>
        </div>
      </div>
    <div className={styles.post} dangerouslySetInnerHTML={{__html: post.content}}>
          {/* {post.content} */}
      </div>
    {/* <div>Comment</div> */}
    <Recommended></Recommended>
    </div>)
}