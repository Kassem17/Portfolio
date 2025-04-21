import styles from "./ProjectStyles.module.css";
import Car_rental from "../../assets/logo.svg";
import Chat_App from "../../assets/chat-app.jpg";
import Prescripto from "../../assets/Prescripto.png";
import Skill from "../../assets/skill.svg";
import e_commerce from "../../assets/e-commerce.png";
import LMS_Logo from "../../assets/LMS_logo.svg";
import Recipe_logo from "../../assets/recipe_logo.svg";
import Project_system from "../../assets/Project_system.svg";

import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={Car_rental} link="" h3="Car-Rental" p="Rental App" />
        <ProjectCard src={Prescripto} link="" h3="Prescripto" p="Booking App" />
        <ProjectCard src={Chat_App} link="" h3="Chat-app" p="Streaming App" />
        <ProjectCard src={Skill} link="" h3="Skill Hub" p="Skills" />
        <ProjectCard src={LMS_Logo} link="" h3="Learning System" p="LMS" />
        <ProjectCard
          src={Recipe_logo}
          link=""
          h3="Recipe App"
          p="Booking Book"
        />
        <ProjectCard
          src={Project_system}
          link=""
          h3="Projects MAnagement System"
          p="PMS"
        />

        <ProjectCard
          src={e_commerce}
          link=""
          h3="E-commerce "
          p="Online Shop"
        />
      </div>
    </section>
  );
}

export default Projects;
