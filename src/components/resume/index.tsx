import resume from "../../../static/resume.json";
import Card from "@/components/card";
import styles from "./resume.module.scss";
const {
  sections: { header, skills, recentProjects, experience, education },
} = resume;

const Education = () => (
  <div className={styles.sectionContainer}>
    <h3>{education.sectionHeader}</h3>
    <hr />
    {education.body.map(({ name, location, description, dates }) => {
      return (
        <div className={styles.experienceContainer} key={name}>
          <p>
            <b>{name} |</b> <i>{location}</i> <b>|</b> <i>{description}</i>
          </p>
          <p>{dates}</p>
        </div>
      );
    })}
  </div>
);

const WorkExperience = () => (
  <div className={styles.sectionContainer}>
    <h3>{experience.sectionHeader}</h3>
    <hr />
    {experience.body.map(({ title, type, dates, summary, location }) => {
      return (
        <>
          <div className={styles.workExperienceContainer} key={title}>
            <p>
              <b>{title} |</b> <i>{type}</i> <b>|</b> <i>{location}</i>
            </p>
            <p>{dates}</p>
          </div>
          <ul>
            {summary.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </>
      );
    })}
  </div>
);

const ProjectLink = ({ link }: { link?: string }) => {
  if (link) {
    return (
      <>
        |{" "}
        <a target="_blank" href={link}>
          {link}
        </a>
      </>
    );
  }

  return null;
};

const RecentProjects = () => (
  <div className={styles.sectionContainer}>
    <h3>{recentProjects.sectionHeader}</h3>
    <hr />
    {recentProjects.body.map(({ title, type, role, link, summary }) => (
      <>
        <p key={title}>
          <b>{title} |</b> <i>{role}</i> <ProjectLink link={link} />
        </p>
        <p>
          <b>{type}</b>
        </p>
        <ul>
          {summary.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </>
    ))}
  </div>
);

const Skills = () => (
  <div className={styles.sectionContainer}>
    <h3>{skills.sectionHeader}</h3>
    <hr />
    {skills.body.map(({ title, summary }) => (
      <p key={title}>
        <b>{title} |</b> {summary.join(", ")}
      </p>
    ))}
  </div>
);

const ResumeHeader = () => (
  <div className={styles.header}>
    <div className={styles.infoContainer}>
      <p>{header.contact.location}</p>
      <p>{header.contact.phoneNumber}</p>
      <a href={`mailto:${header.contact.email}`}>{header.contact.email}</a>
    </div>
    <h2>{header.title}</h2>
    <div className={styles.infoContainer}>
      {header.links.map(({ display, href }) => (
        <a key={display} target="_blank" href={href}>
          {display}
        </a>
      ))}
    </div>
  </div>
);

export default function Resume() {
  return (
    <Card>
      <div className={styles.container}>
        <ResumeHeader />
        <Skills />
        <RecentProjects />
        <WorkExperience />
        <Education />
      </div>
    </Card>
  );
}
