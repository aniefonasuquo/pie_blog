import Link from "next/link";
import img1 from '../../../../public/img1.jpg'
import layout from '../page.module.css'
import Category from "./category";
import Image from "next/image";
import { Suspense } from "react";

export default function FeatureCard ({data}) {

  return (
  <div className={layout.featured_scroll}>
        {
            data.map(({_id, title, tags, content, featured_image, image_link, excerpt, slug}) => (          
            <div className={layout.feature_card_wrap} key={_id}>
              <div className={layout.featured_img_container}>
                <Link href={`/post/${slug}`}>
                    <Image alt="image" className={layout.featured_post_img} src={image_link} height={`${featured_image.height}`} width={`${featured_image.width}`} sizes="100vw"></Image>
                </Link>
                <div className={layout.article_category_container}>
                  {
                    tags.map(tag => (<div className={layout.article_category} key={tag}>
                       <Category tag={tag}></Category>
                    </div>
                  ))
                  }
                </div>
              </div>
              <div className={layout.article_brief_container}>
                <Link href={`/post/${slug}`}>
                  <h3 className={layout.LandingArticleHeading}>{title}</h3>
                   <p>{`${excerpt.substring(0, 200)}...`}</p>
                </Link>
              </div>
            </div>))} 
  </div>)
}