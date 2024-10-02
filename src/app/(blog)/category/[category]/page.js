import styles from './page.module.css'
import layout from './../../page.module.css'
import Loop from '@/app/(blog)/components/loop'
import Image from 'next/image'
import ArticleCard from '../../components/articlecard'
import { getCategoryPosts } from '../../functions/functions'
import LoopSection from '../../components/loopsection'

export async function generateMetadata({ params, searchParams }, parent) {
 
  return {
    title: `Pie Blog Archives: ${params.category}`,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  }
}


export default async function Category ({params}) {

  const data = await getCategoryPosts(params.category)
  const postcount = data.length

  return (<>
    <div className={styles.head_container}>
      <div>
        <Image></Image>
        </div>
      <h1>{params.category}<span>{postcount}</span></h1>
      <p>Quae in controversiam veniunt, de iis, si placet, disseramus. Iam quae corporis sunt, ea nec auctoritatem cum animi.</p>
      </div>
    <div className={layout.loop_global_wrap}>
      <div className={layout.loop_section}>
          <LoopSection data={data}></LoopSection>
        </div>
      </div>
  </>)
}