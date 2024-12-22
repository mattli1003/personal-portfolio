import React from "react"
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/myimage.jpg")}
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
            />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/cursorIcon.png")}
                        alt="Cursor icon"
                        className={styles.cursorIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Computer Science</h3>
                        <p>I am a passionate developer with hands-on experience in creating visually engaging interfaces as well as AI programs</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/serverIcon.png")}
                        alt="Server icon"
                        className={styles.serverIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Data Analytics</h3>
                        <p>I have experience in interpreting complex datasets, using data analysis and API integrations to streamline data-driven decision-making</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img
                        src={getImageUrl("about/uiIcon.png")}
                        alt="UI Icon"
                        className={styles.uiIcon}
                    />
                    <div className={styles.aboutItemText}>
                        <h3>Marketing</h3>
                        <p>My passion for marketing is fueled by my data analytics and computer science background, enabling me to craft data-driven strategies that effectively engage and grow audiences</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
