import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage1.png")}
          alt="about"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="cursor-icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
                Hey there! I'm Rizqi, a junior full stack developer with a
                passion for learning and a knack for adaptability. While my
                journey in the tech world may just be starting, my enthusiasm to
                dive deep and master the craft knows no bounds.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="server-icon" />
            <div className={styles.aboutItemText}>
              <h3></h3>
              <p>
                🚀 Looking ahead, I'm eager to collaborate, learn from seasoned
                professionals, and contribute my unique perspective to
                innovative projects. Let's connect, collaborate, and build
                something incredible together!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
