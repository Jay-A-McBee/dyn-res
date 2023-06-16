import Image from "next/image";

import resume from "../../../static/resume.json";
import projectJson from "../../../static/projects.json";
import styles from "./resume.module.scss";
import Copy from "@/utils/copy";
import { GithubIcon, RustLogoIcon, ReactNativeIcon } from "../icons";

const iconMap: Record<
  string,
  (p: { height: number; width: number }) => JSX.Element
> = {
  github: GithubIcon,
  rust: RustLogoIcon,
  "react-native": ReactNativeIcon,
};

const {
  sections: { skills, recentProjects, experience },
} = resume;

const { projects } = projectJson;

// const Education = () => (
//   <div className={styles.sectionContainer}>
//     <h3>{education.sectionHeader}</h3>
//     <hr />
//     {education.body.map(({ name, location, description, dates }) => {
//       return (
//         <div className={styles.experienceContainer} key={name}>
//           <p>
//             <b>{name}</b>
//             <b className={styles.sep}>|</b>
//             <i>{location}</i>
//             <b className={styles.sep}>|</b>
//             <i>{description}</i>
//           </p>
//           <p className={styles.highlight}>{dates}</p>
//         </div>
//       );
//     })}
//   </div>
// );

const WorkExperience = () => (
  <div className={styles.sectionContainer}>
    <h3>{experience.sectionHeader}</h3>
    <hr />
    {experience.body.map(({ title, type, dates, summary, location }) => {
      return (
        <span key={title}>
          <div className={styles.workExperienceContainer}>
            <p>
              <b>{title}</b>
              <b className={styles.sep}>|</b>
              <i>{type}</i>
              <b className={styles.sep}>|</b>
              <i>{location}</i>
            </p>
            <p className={styles.highlight}>{dates}</p>
          </div>
          <ul>
            {summary.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </span>
      );
    })}
  </div>
);

const ProjectLink = ({ link }: { link?: string }) => {
  if (link) {
    return (
      <>
        <b className={styles.sep}>|</b>
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
      <span key={title}>
        <p key={title}>
          <b>{title}</b>
          <b className={styles.sep}>|</b> <i>{role}</i>{" "}
          <ProjectLink link={link} />
        </p>
        <p>
          <b>{type}</b>
        </p>
        <ul>
          {summary.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </span>
    ))}
  </div>
);

const Skills = () => (
  <div className={styles.sectionContainer}>
    <h3>{skills.sectionHeader}</h3>
    <hr />
    {skills.body.map(({ title, summary }) => (
      <p className={styles.skills} key={title}>
        <b>{title} |</b> {summary.join(", ")}
      </p>
    ))}
  </div>
);

const SideProjects = () => (
  <div className={styles.sectionContainer}>
    <h3>Side Projects</h3>
    <hr />
    {projects.map(({ title, repoHref, lang, description, summary, img }) => {
      const LangIcon = iconMap[lang];
      return (
        <span key={title}>
          <div className={styles.contentContainer}>
            <div className={styles.projectInfo}>
              <div className={styles.titleContainer}>
                <h3>{title}</h3>
                <div className={styles.iconContainer}>
                  <a
                    aria-label={`${title} github repo link`}
                    target="_blank"
                    href={repoHref}
                  >
                    <GithubIcon height={25} width={25} />
                  </a>
                  <LangIcon height={25} width={25} />
                </div>
              </div>
              <b>{description}</b>
              <ul>
                {summary.map((line) => (
                  <li key={line}>
                    <Copy text={line} />
                  </li>
                ))}
              </ul>
              <div className={`${styles.iconContainer} ${styles.desktopOnly}`}>
                <a
                  target="_blank"
                  aria-label={`${title} github repo link`}
                  href={repoHref}
                >
                  <GithubIcon height={50} width={50} />
                </a>
                <LangIcon height={55} width={55} />
              </div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={img.alt}
              src={img.src}
              height={img.height}
              width={img.width}
              loading="lazy"
            />
          </div>
          <hr />
        </span>
      );
    })}
  </div>
);

export default function Resume() {
  return (
    <div className={styles.container}>
      <Skills />
      <RecentProjects />
      <WorkExperience />
      <SideProjects />
    </div>
  );
}
