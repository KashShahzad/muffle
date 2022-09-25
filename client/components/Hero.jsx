import styles from "../styles/Hero.module.css";
import Image from "next/image";
import { FaAndroid, FaApple } from "react-icons/fa";
function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        <p>
          <span>🚀</span> We Ship Pakistan's Most Loved Foods Nationwide{" "}
          <span>❤️</span>
        </p>
      </div>
      <div className={styles.main}>
        <div className={styles.img}>
          <Image
            src="/img/bg0.jpg"
            width={1000}
            height={300}
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <div className={styles.text}>
          <p>All the popular dishes are here</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
