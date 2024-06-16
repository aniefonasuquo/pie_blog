import Link from "next/link";
import img1 from '../../../public/img1.jpg'
import layout from '../page.module.css'
import Category from "./category";
import Image from "next/image";

export default function FeatureCard ({data}) {
  
  return (<div className={layout.featured_scroll}>
        {
            data.map(({id, title, tags, body}) => (          
            <div className={layout.feature_card_wrap} key={id}>
              <div className={layout.article_img_container}>
                <Link href={`/post/${id}`}>
                  <Image alt="image" className={layout.featured_post_img} src={img1} sizes="100vw"></Image>
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
                <Link href={`/post/${id}`}>
                  <h3 className={layout.LandingArticleHeading}>{title}</h3>
                   <p>{`${body.substring(0, 200)}...`}</p>
                </Link>
              </div>
            </div>))
          }
    
  </div>)
}