import styles from "../styles/Features.module.css";
function Features() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
      <div className={styles.block}>
        <div
          className={styles.right}
          style={{ backgroundColor: "#E9C46A" }}></div>
        <div className={styles.left}></div>
      </div>
      <div className={styles.block}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
}

export default Features;
