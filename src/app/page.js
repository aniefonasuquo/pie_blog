import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import img1 from '../../public/img1.jpg'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.hero_global_wrap}>
        <div className={styles.herowrap}>
          <div>
            <h2 className={styles.herotextwrap}>Connecting People, Projects and Products worldwide</h2>
          </div>
          <div className={styles.hero_subscribe_wrap}>
            <div><Link href='/'><button>Become a subscriber</button></Link></div>
            <div className={styles.hero_subscribe_text}><span>Get the email newsletter and unlock access to members-only content and updates</span></div>
          </div>
        </div>
        <div className={styles.featured_section_wrap}>
        <div className={styles.featured_section_top}>
          <p>Get started with our best stories</p>
          <div className={styles.feature_scroll}>
            <div>Prev</div>
            <div>Next</div>
          </div>
        </div>
        <div className={styles.featured_row}>
        <div className={styles.featured_scroll}>
          <div className={styles.article_card_wrap}>
            <div className={styles.article_img_container}>
              <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_category_container}>
              <div className={styles.article_category}>Health</div>
              <div className={styles.article_category}>Wealth</div>
              <div className={styles.article_category}>Money</div>
            </div>
            <div className={styles.article_brief_container}>
              <h4>New Technology is Not Good In and Of itself</h4>
              <p>Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a,</p>
            </div>
          </div>
          <div className={styles.article_card_wrap}>
            <div className={styles.article_img_container}>
              <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_category_container}>
              <div className={styles.article_category}>Health</div>
              <div className={styles.article_category}>Wealth</div>
              <div className={styles.article_category}>Money</div>
            </div>
            <div className={styles.article_brief_container}>
              <h4>New Technology is Not Good In and Of itself</h4>
              <p>Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a,</p>
            </div>
          </div>
          <div className={styles.article_card_wrap}>
            <div className={styles.article_img_container}>
              <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_category_container}>
              <div className={styles.article_category}>Health</div>
              <div className={styles.article_category}>Wealth</div>
              <div className={styles.article_category}>Money</div>
            </div>
            <div className={styles.article_brief_container}>
              <h4>New Technology is Not Good In and Of itself</h4>
              <p>Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a,</p>
            </div>
          </div>
          <div className={styles.article_card_wrap}>
            <div className={styles.article_img_container}>
              <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_category_container}>
              <div className={styles.article_category}>Health</div>
              <div className={styles.article_category}>Wealth</div>
              <div className={styles.article_category}>Money</div>
            </div>
            <div className={styles.article_brief_container}>
              <h4>New Technology is Not Good In and Of itself</h4>
              <p>Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a,</p>
            </div>
          </div>
          <div className={styles.article_card_wrap}>
            <div className={styles.article_img_container}>
              <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_category_container}>
              <div className={styles.article_category}>Health</div>
              <div className={styles.article_category}>Wealth</div>
              <div className={styles.article_category}>Money</div>
            </div>
            <div className={styles.article_brief_container}>
              <h4>New Technology is Not Good In and Of itself</h4>
              <p>Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a,</p>
            </div>
          </div>
          <div className={styles.article_card_wrap}>
            <div className={styles.article_img_container}>
              <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_category_container}>
              <div className={styles.article_category}>Health</div>
              <div className={styles.article_category}>Wealth</div>
              <div className={styles.article_category}>Money</div>
            </div>
            <div className={styles.article_brief_container}>
              <h4>New Technology is Not Good In and Of itself</h4>
              <p>Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a,</p>
            </div>
          </div>

          </div>
      </div>
      </div>

        
      </div>
      <div className={styles.loop_global_wrap}>
      <div className={styles.loop_section}>
        <div className={styles.loop_section_top}>
          <div>See what we’ve written lately</div>
          <div className={styles.category_illustrations_container}>
            <div className={styles.category_illustrations}>
              <div className={styles.illustration_1}></div>
              <div className={styles.illustration_2}></div>
              <div className={styles.illustration_3}></div>
              <div className={styles.illustration_4}></div>
              <div className={styles.illustration_5}></div>
            </div>
            <p>Meet our top authors</p>
          </div>
        </div>
        <div className={styles.loop_section_wrap}>
          <div className={styles.loop_article_card_wrap}>
            <div className={styles.article_img_container}>
                <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_category_container}>
                <div className={styles.article_category}>Health</div>
                <div className={styles.article_category}>Wealth</div>
                <div className={styles.article_category}>Money</div>
            </div>
            <div className={styles.article_brief_container}>
                <h4>New Technology is Not Good In and Of itself</h4>
                <p>Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a,</p>
            </div>
          </div>
          <div className={styles.loop_article_card_wrap}>
            <div className={styles.article_img_container}>
                <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_category_container}>
                <div className={styles.article_category}>Health</div>
                <div className={styles.article_category}>Wealth</div>
                <div className={styles.article_category}>Money</div>
            </div>
            <div className={styles.article_brief_container}>
                <h4>New Technology is Not Good In and Of itself</h4>
                <p>Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a,</p>
            </div>
          </div>
          <div className={styles.loop_article_card_wrap}>
            <div className={styles.article_img_container}>
                <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_category_container}>
                <div className={styles.article_category}>Health</div>
                <div className={styles.article_category}>Wealth</div>
                <div className={styles.article_category}>Money</div>
            </div>
            <div className={styles.article_brief_container}>
                <h4>New Technology is Not Good In and Of itself</h4>
                <p>Nullam vel lectus vel velit pellentesque dignissim nec id magna. Cras molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu venenatis justo. Nullam felis augue, imperdiet at sodales a,</p>
            </div>
          </div>
        </div>

        </div>
      <div className={styles.pagination_section}>
        <button>Load More</button></div>  
      <div className={styles.recomwnded_section}>
        <div>Recommended</div>
        <div className={styles.recomwnded_section_row}>
          <div className={styles.recom_article_card_wrap}>
            <div className={styles.article_img_container}>
                <Image className={styles.featured_post_img} src={img1} sizes="100vw"></Image>
            </div>
            <div className={styles.article_brief_container}>
                <h4>New Technology is Not Good In and Of itself</h4>
            </div>
          </div>
        </div>
      </div>


      </div>

    </div>
  );
}
