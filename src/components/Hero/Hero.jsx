import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.greeting}>Hi, I'm</h1>
        <h1 className={styles.title}>Matt Li</h1>
        <p className={styles.description}>
          I am a senior at Rutgers University majoring in Computer Science and Business Administration. Reach out if you would like to learn more!
        </p>
        <a href="mailto:matt.li.1003@gmail.com" className={styles.contactBtn}>
          Email Me
        </a>
      </div>
      <img src={getImageUrl("myImage/myImage.png")} alt = "My image of me" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};