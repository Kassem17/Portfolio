import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
// import twitterLight from "../../assets/twitter-light.svg";
// import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
import Mern_logo from "../../assets/mern.png";
import whatsappLight from "../../assets/whatsapp-light.svg";
import whatsappDark from "../../assets/whatsapp-dark.svg";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  // const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const whatsappIcon = theme === "light" ? whatsappLight : whatsappDark;

  const defaultMessage = encodeURIComponent(
    "Hello, I would like to inquire about your services. Can you please provide more details?"
  );
  const whatsappUrl = `https://wa.me/+96171343792?text=${defaultMessage}`;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Kassem Haidar"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.name}>
          <img className={styles.logo} src={Mern_logo} alt="" />
          <span className={styles.nameSpan}>
            Kassem
            <br />
            Haidar
          </span>
        </h1>
        <h2>MERN Stack Developer</h2>
        <span>
          {/* <a
            className={styles.socialLinks}
            href="https://x.com/kassemh31200911?t=TQIOiyPxaktGplFPBkKQSA&s=09"
            target="_blank"
          >
            <img src={twitterIcon} alt="Twitter icon" />
          </a> */}
          <a
            className={styles.socialLinks}
            href="https://github.com/Kassem17"
            target="_blank"
          >
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            className={styles.socialLinks}
            href="http://www.linkedin.com/in/kassem-haidar-068262350"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a className={styles.socialLinks} href={whatsappUrl} target="_blank">
            <img src={whatsappIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Love creating modern{" "}
          <span className={styles.highlight}>React web apps</span> that help
          businesses level up their online presence.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
