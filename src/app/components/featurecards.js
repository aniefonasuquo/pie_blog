import layout from './../page.module.css'

export default function FeatureCard ({data}) {
  
  return (
   <div className={layout.feature_card_wrap}>
              <div className={layout.article_img_container}>
                <Link href={`/post/${data.id}`}>
                  <Image alt="image" className={layout.featured_post_img} src={img1} sizes="100vw"></Image>
                </Link>
                <div className={layout.article_category_container}>
                  {
                    data.tags.map(tag => (<div className={layout.article_category} key={tag}>
                       <Category tag={tag}></Category>
                    </div>
                  ))
                  }
                </div>              
              </div>
              <div className={layout.article_brief_container}>
                <Link href={`/post/${id}`}>
                  <h3>{data.title}</h3>
                   <p>{`${data.body.substring(0, 200)}...`}</p>
                </Link>
              </div>
            </div>)
}