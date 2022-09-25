import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.deck}>
        <h1 className={styles.logo} style={{ textTransform: "uppercase" }}>
          Muffle
        </h1>
        <p>About & Help</p>
        <form action="" className={styles.form}>
          <input
            type="text"
            placeholder="Search Pakistan's Greatest Food & Shops"
            className={styles.input}
          />
        </form>
        <p>Language</p>
        <div className={styles.auth}>
          <p>Login</p>
          <span>|</span>
          <p>Signup</p>
        </div>
        <p>Cart</p>
      </div>
      <div className={`${styles.deck} ${styles.dplus}`}>
        <span className={styles.listItem}>Muffle Picks</span>
        <span className={styles.listItem}>Foods</span>
        <span className={styles.listItem}>Gifts</span>
        <span className={styles.listItem}>MealKits</span>
        <span className={styles.listItem}>Restaurants</span>
        <span className={styles.listItem}>Regions</span>
        <span className={styles.listItem}>Occasions</span>
        <span className={styles.listItem}>Sales</span>
      </div>
    </div>
  );
};

export default Header;
