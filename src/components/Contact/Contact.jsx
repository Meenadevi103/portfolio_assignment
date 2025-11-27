import React from "react";
import styles from "./Contact.module.css";
import {
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLinkedin
} from "react-icons/fa";

export const Contact = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Contact details</h1>
      <p className={styles.message}>
        I am an MCA student passionate about web development and software technologies.<br />
        Collaborate, discuss a project, or just connect—feel free to contact me any time!<br />
        You can message me via email or reach out on LinkedIn:
     <a
  href="https://www.linkedin.com/in/meenadevi-ravikumar-816831250"
  target="_blank"
  rel="noopener noreferrer"
>
  LinkedIn
</a>

      </p>

      <form
        action="https://formspree.io/f/xovyonar"
        method="POST"
        className={styles.form}
      >
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" placeholder="Project details" rows={6} required></textarea>
        <button type="submit" className={styles.submitBtn}>Submit</button>
      </form>

      <div className={styles.socialBar}>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter size={32} /></a>
        <a href="https://pinterest.com/" target="_blank" rel="noopener noreferrer"><FaPinterestP size={32} /></a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram size={32} /></a>
        <a href="https://github.com/Meenadevi103/" target="_blank" rel="noopener noreferrer"><FaGithub size={32} /></a>
        <a href="https://www.linkedin.com/in/meenadevi-ravikumar-816831250" target="_blank" rel="noopener noreferrer"><FaLinkedin size={32} /></a>
        <a href="mailto:meenadeviravikumar@gmail.com"><FaEnvelope size={32} /></a>
        <a href="tel:9447873272"><FaPhone size={32} /></a>
      </div>
    </section>
  );
};
