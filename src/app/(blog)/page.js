import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import img1 from './../../../public/img1.jpg'
import Loop from "./components/loop";
import Recommended from "./components/recommended";
import Category from "./components/category";
import { getFirstSixPosts } from "./functions/functions";
import { Suspense } from "react";
import { LayoutRouter } from "next/dist/server/app-render/entry-base";
import FeatureCard from "./components/featurecards";

export default async function Home() {

  const data = await getFirstSixPosts()

  return (
    <div  className={styles.main}>
      <div className={styles.hero_global_wrap}>
        <div className={styles.herowrap}>
          <h1 className={styles.herotextwrap}>Make The Right Wealth Decisions</h1>
          <div className={styles.hero_subscribe_wrap}>
            <div><Link href='/subscribe'><button>Become a subscriber</button></Link></div>
            <div className={styles.hero_subscribe_text}><span>Get the email newsletter and unlock access to members-only content and updates</span></div>
          </div>
        </div>
        <FeatureCard data={data}></FeatureCard>
      </div>
      <div className={styles.loop_global_wrap}>
        <div className={styles.loop_section}>
          <Loop></Loop>
          </div>
        </div>  
        <Recommended></Recommended>
      </div>
    
  );
}
