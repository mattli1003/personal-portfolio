import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:matt.li.1003@gmail.com">matt.li.1003@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/phone.png")} alt="Phone icon" />
                <a>+1 (732) 822-8420</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                <a href="https://www.linkedin.com/in/matthew-li-644b4a205/">LinkedIn</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
                <a href="https://github.com/mattli1003">GitHub</a>
            </li>
        </ul>
    </footer>
  );
};
