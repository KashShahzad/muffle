import styles from "../styles/Header.module.css";
import { MdLanguage } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const notify = () =>
    toast.info("Coming Soon!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className={styles.container}>
      <div className={styles.deck}>
        <ToastContainer />

        <h1 className={styles.logo} style={{ textTransform: "uppercase" }}>
          Muffle
        </h1>
        <p style={{ cursor: "pointer" }} onClick={notify}>
          About & Help
        </p>
        <form action="" className={styles.form}>
          <input
            type="search"
            placeholder="Search Pakistan's Greatest Food & Shops | Coming Soon"
            className={styles.input}
          />
        </form>
        <MdLanguage
          onClick={notify}
          style={{ fontSize: "1.6rem", cursor: "pointer" }}
        />
        <div className={styles.auth}>
          <p style={{ cursor: "pointer" }} onClick={notify}>
            Login
          </p>
          <span>|</span>
          <p style={{ cursor: "pointer" }} onClick={notify}>
            Signup
          </p>
        </div>
        <FaShoppingCart
          onClick={notify}
          style={{ fontSize: "1.4rem", cursor: "pointer" }}
        />
      </div>
      <div className={`${styles.deck} ${styles.dplus}`}>
        <span onClick={notify} className={styles.listItem}>
          Muffle's Pick
        </span>
        <span onClick={notify} className={styles.listItem}>
          Foods
        </span>
        <span onClick={notify} className={styles.listItem}>
          Gifts
        </span>
        <span onClick={notify} className={styles.listItem}>
          MealKits
        </span>
        <span onClick={notify} className={styles.listItem}>
          Restaurants
        </span>
        <span onClick={notify} className={styles.listItem}>
          Regions
        </span>
        <span onClick={notify} className={styles.listItem}>
          Occasions
        </span>
        <span onClick={notify} className={styles.listItem}>
          Sales
        </span>
      </div>
    </div>
  );
};

export default Header;
