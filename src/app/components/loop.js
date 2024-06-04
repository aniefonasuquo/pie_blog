import Image from "next/image";
import styles from "./loop.module.css";
import Link from "next/link";
import img1 from '../../../public/img1.jpg'
import layout from './../page.module.css'
import { getLimitedPosts } from "../functions/functions";
import ArticleCard from "./articlecard";
import LoopSection from "./loopsection";

export default async function Loop ({page}) {

  const posts = await getLimitedPosts(6)

  return (<>
        <div className={styles.loop_section_top}>
          <h3>See what we’ve written lately</h3>
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
        <LoopSection data={posts}></LoopSection>
        </>)}  