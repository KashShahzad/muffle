import styles from "../styles/Hero.module.css";
import Image from "next/image";
import { FaAndroid, FaApple } from "react-icons/fa";
function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>We Ship Pakistan's Most Loved Food Nationwide</p>
      </div>
      <div className={styles.main}>
        <div className={styles.desc}>
          <div className={styles.img}></div>
          <div className={styles.text}>
            <h1>The whole store and more, now at your fingertips</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
