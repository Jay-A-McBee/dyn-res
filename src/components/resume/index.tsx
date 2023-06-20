import { ForwardedRef, forwardRef, Fragment } from "react";
import Image from "next/image";

import styles from "./resume.module.scss";
import Copy from "@/utils/copy";
import { GithubIcon, RustLogoIcon, ReactNativeIcon } from "../icons";
import resume from "../../../static/resume.json";
import projectJson from "../../../static/projects.json";

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
        <Fragment key={title}>
          <div className={styles.workExperienceContainer}>
            <p>
              <span className={styles.bold}>{title}</span>
              <span className={`${styles.bold} ${styles.sep}`}>|</span>
              <span className={styles.italicize}>{type}</span>
              <span className={`${styles.bold} ${styles.sep}`}>|</span>
              <span className={styles.italicize}>{location}</span>
            </p>
            <p className={styles.highlight}>{dates}</p>
          </div>
          <ul>
            {summary.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </Fragment>
      );
    })}
  </div>
);

const ProjectLink = ({ link }: { link?: string }) => {
  if (link) {
    return (
      <>
        <span className={`${styles.bold} ${styles.sep}`}>|</span>
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
      <Fragment key={title}>
        <p key={title}>
          <span className={styles.bold}>{title}</span>
          <span className={`${styles.bold} ${styles.sep}`}>|</span>{" "}
          <span className={styles.italicize}>{role}</span>{" "}
          <ProjectLink link={link} />
        </p>
        <p>
          <span className={styles.bold}>{type}</span>
        </p>
        <ul>
          {summary.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </Fragment>
    ))}
  </div>
);

const Skills = () => (
  <div className={styles.sectionContainer}>
    <h3>{skills.sectionHeader}</h3>
    <hr />
    {skills.body.map(({ title, summary }) => (
      <p className={styles.skills} key={title}>
        <span className={styles.bold}>{title} |</span> {summary.join(", ")}
      </p>
    ))}
  </div>
);

const SideProjects = () => (
  <div className={styles.sectionContainer}>
    <h3>Side Projects</h3>
    <hr />
    {projects.map(
      ({
        title,
        repoHref,
        lang,
        description,
        summary,
        img: { alt, ...rest },
      }) => {
        const LangIcon = iconMap[lang];
        return (
          <Fragment key={title}>
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
                <p className={styles.bold}>{description}</p>
                <ul>
                  {summary.map((line) => (
                    <li key={line}>
                      <Copy text={line} />
                    </li>
                  ))}
                </ul>
                <div
                  className={`${styles.iconContainer} ${styles.desktopOnly}`}
                >
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
              <div className={styles.imgContainer}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={alt} loading="lazy" {...rest} />
              </div>
            </div>
            <hr />
          </Fragment>
        );
      }
    )}
  </div>
);

export default forwardRef(function Resume(
  _props,
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div ref={ref} className={styles.container}>
      <Skills />
      <RecentProjects />
      <WorkExperience />
      <SideProjects />
    </div>
  );
});
