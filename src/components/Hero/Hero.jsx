import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rizqi</h1>
        <p className={styles.description}>
          I'm a Fullstack Developer, reach me out!
        </p>
        <a href="mailto:qk3U1@example.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.jpg")}
        alt="hero"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
