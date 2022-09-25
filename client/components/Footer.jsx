import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.proj}>
        <p
          className={styles.pr}
          onClick={() => window.open("https://www.kashinnov.com")}>
          Induspie
        </p>
        <p
          className={styles.pr}
          onClick={() => window.open("https://cafepie.kashinnov.com")}>
          Cafepie
        </p>
      </div>
      <div className={styles.contact}>
        <span
          className={styles.pr}
          onClick={(e) => {
            window.location = "mailto:shahzad@kashinnov.com";
            e.preventDefault();
          }}>
          Contact
        </span>
      </div>
    </div>
  );
};

export default Footer;
