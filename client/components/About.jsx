import styles from "../styles/About.module.css";
import Image from "next/image";

function About() {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.card}>
        <div className="img"></div>
        <h3>Heading</h3>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
      </div>
      <div className={styles.card}>
        <div className="img"></div>
        <h3>Heading</h3>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
      </div>
      <div className={styles.card}>
        <div className="img"></div>
        <h3>Heading</h3>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
      </div>
      <div className={styles.card}>
        <div className="img"></div>
        <h3>Heading</h3>
        <ul>
          <li>Point 1</li>
          <li>Point 2</li>
          <li>Point 3</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
