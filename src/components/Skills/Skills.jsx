import React from "react";
import styles from "./Skills.module.css";
import javaIcon from "../../assets/java.png";
import photoshopIcon from "../../assets/photoshop.png";
import cssIcon from "../../assets/css-3.png";
import cIcon from "../../assets/letter-c.png";
import htmlIcon from "../../assets/html.png";
import cppIcon from "../../assets/c.png";
import reactIcon from "../../assets/atom.png";
import pythonIcon from "../../assets/python.png";
import phpIcon from "../../assets/php.png";
// Example skill data (can move this to a separate JSON or JS file)
const skills = [
    {
    name: "React",
    icon: reactIcon,
    rating: 5
  },
  {
    name: "Java",
    icon: javaIcon,
    rating: 6
  },
  {
    name: "HTML",
    icon: htmlIcon,
    rating: 5
  },
  {
    name: "CSS",
    icon: cssIcon,
    rating: 4
  },
    {
    name: "Python",
    icon: pythonIcon,
    rating: 5
  },
    {
    name: "PHP",
    icon: phpIcon,
    rating: 4
  },
    {
    name: "C",
    icon: cIcon,
    rating: 5
  },
  {
    name: "C++",
    icon: cppIcon,
    rating: 4
  },


  
  {
    name: "Photoshop",
    icon: photoshopIcon,
    rating: 4
  }
];

export const Skills = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.grid}>
        {skills.map((skill, idx) => (
          <div key={idx} className={styles.card}>
            <img src={skill.icon} alt={skill.name} className={styles.icon} />
            <div className={styles.name}>{skill.name}</div>
            <div className={styles.rating}>
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < skill.rating
                      ? styles.dot
                      : styles.dotInactive
                  }
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
