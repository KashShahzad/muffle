import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.totop}>
        <p>Back to top</p>
      </div>
      <div className={styles.centerdeck}>
        <div className={styles.sitemap}>
          <p>Induspie</p>
          <p>Cafepie</p>
        </div>
        <div className={styles.feed}>
          <div className={styles.feedback}>
            <p>We’d love to hear what you think!</p>
            <button>Give Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
