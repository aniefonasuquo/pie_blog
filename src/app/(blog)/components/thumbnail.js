import Link from "next/link"
import Image from "next/image"
import styles from '../page.module.css'

export default function Thumbnail ({slug, image_link, featured_image}) {

  return  (
          <Link href={`/post/${slug}`}>
            <Image alt="image" className={styles.featured_post_img} src={image_link} height={`${featured_image.height}`} width={`${featured_image.width}`} sizes="100vw"></Image>
            </Link>  
)

}