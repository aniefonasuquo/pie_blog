import Link from "next/link";
import img1 from './../../../../public/img1.jpg'
import layout from '../page.module.css'
import Category from "./category";
import Image from "next/image";

export default function ArticleCard ({data}) {

  return (<>
        {
            data.map(({_id, title, tags, content, featured_image, image_link, excerpt, slug}) => 
              (
                <div className={layout.feature_card_wrap} key={_id}>
                <div className={layout.article_img_container}>
                  <Link href={`/post/${slug}`}>
                  <Image alt="image" className={layout.featured_post_img} src={image_link} height={`${featured_image.height}`} width={`${featured_image.width}`} ></Image>
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
                     <p>{excerpt.substring(0, 200)}</p>
                  </Link>
                </div>
              </div>))
          }
    
  </>)
        }