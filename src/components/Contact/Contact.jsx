import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:mochammadrizqiaullia@gmail.com">
            mochammadrizqiaullia@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedInIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rizqiau/">
            linkedin.com/rizqiau
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/rizqiau">github.com/rizqiau</a>
        </li>
      </ul>
    </footer>
  );
};
