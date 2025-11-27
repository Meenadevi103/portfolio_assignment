import meImage from "../../assets/about/my_photo.jpeg";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble, FaPinterest, FaChevronDown, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.contentWrapper}>
          <span className={styles.subtitle}>HELLO</span>
          <h1 className={styles.title}>
            I'm Meenadevi <br />
            Ravikumar
          </h1>
          <p className={styles.description}>
            A product designer based in Somewhere.
          </p>

          <div className={styles.buttonGroup}>
            <a href="#about" className={styles.primaryBtn}>MORE ABOUT ME</a>
            <a href="\public\resume.pdf" className={styles.secondaryBtn}>GET MY CV</a>
          </div>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.imageOverlay}></div>
        <img src={meImage} alt="Meenadevi" className={styles.heroImage} />
      </div>

      <div className={styles.socialSidebar}>
        <a href="https://www.linkedin.com/in/meenadevi-ravikumar-816831250" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedin /></a>
        <a href="https://github.com/Meenadevi103/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaGithub /></a>
        <a href="mailto:meenadeviravikumar@gmail.com" className={styles.socialIcon}><FaEnvelope /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaTwitter /></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram /></a>
        <div className={styles.scrollIndicator}>
          <div className={styles.line}></div>
        </div>
        <div className={styles.scrollIconWrapper}>
          <FaChevronDown className={styles.scrollIcon} />
        </div>
      </div>
    </section>
  );
};
