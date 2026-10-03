export default function Portfolio() {
  const projects = [
    {
      category: "Web Development",
      title: "Personal Portfolio Website",
      description:
        "A personal portfolio website created using Next.js and CSS to showcase my skills, projects, interests, and experiences.",
      tech: "Next.js • React • JavaScript • CSS",
    },
    {
      category: "Web Application",
      title: "Next.js Note Application",
      description:
        "A simple note-taking application that allows users to add, view, update, and delete notes using React state management.",
      tech: "Next.js • React • JavaScript • CSS",
    },
    {
      category: "School Project",
      title: "Student Portfolio & Gallery",
      description:
        "A responsive student website designed to present personal information, interests, projects, and memorable experiences through an organized gallery.",
      tech: "Next.js • React • CSS",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Git",
    "GitHub",
  ];

  return (
    <main className="portfolio">
      <section className="portfolioHero">
        <h1>My Portfolio</h1>

        <p className="intro">
          A collection of projects I&apos;ve worked on while learning
          web and application development.
        </p>
      </section>

      <section className="projects">
        {projects.map((project, index) => (
          <article className="projectCard" key={index}>
            <span className="projectCategory">
              {project.category}
            </span>

            <h2>{project.title}</h2>

            <p className="projectDescription">
              {project.description}
            </p>

            <p className="tech">{project.tech}</p>

            <button className="projectButton">
              View Project
            </button>
          </article>
        ))}
      </section>

      <section className="skills">
        <div className="section-header">
          <p>WHAT I USE</p>
          <h2>My Skills</h2>
        </div>

        <div className="skillList">
          {skills.map((skill, index) => (
            <span className="skill" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}