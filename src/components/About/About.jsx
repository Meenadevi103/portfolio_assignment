import React from "react";
import meImage from "../../assets/about/my_photo.jpeg";
import styles from "./About.module.css";
// import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.left}>
        <h2 className={styles.title}>About me</h2>
        <p className={styles.description}>
          I am an MCA first-year student passionate about web development.
          I enjoy building responsive sites and learning new technologies.
        </p>
        <a href="/resume.pdf" download className={styles.cvButton}>
          Download CV
        </a>

      </div>
      <div className={styles.right}>
        <img
          src={meImage}
          alt="Profile"
          className={styles.aboutImage}
        />
      </div>
    </section>
  );
};
