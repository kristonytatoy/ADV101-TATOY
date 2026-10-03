import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="hero">
          <div className="hero-content">

            <h1>
              Welcome to my Website, <span> I'm Kristony.</span>
            </h1>

            <p className="hero-description">
              I'm a web developer who enjoys building modern,
              responsive, and user-friendly websites.
            </p>

            <div className="hero-buttons">
              <a href="/portfolio" className="btn primary">
                View My Projects
              </a>

              <a href="/about" className="btn secondary">
                About Me
              </a>
            </div>
          </div>

          <div className="hero-image">
            <img src="/profile.jpg" alt="Kristony" />
          </div>
        </section>

        {/* Projects */}
        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">MY WORK</p>
            <h2>Featured Projects</h2>
            <p>
              Here are some of the projects I've worked on.
            </p>
          </div>

          <div className="projects-grid">
            <article className="project-card">
              <div className="project-image">Project One</div>
              <div className="project-content">
                <h3>Project One</h3>
                <p>
                  A short description of what this project does
                  and what you built.
                </p>
                <span>Next.js · React · CSS</span>
                <a href="/portfolio">View Project →</a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">Project Two</div>
              <div className="project-content">
                <h3>Project Two</h3>
                <p>
                  Another project that demonstrates your skills
                  and creativity.
                </p>
                <span>JavaScript · HTML · CSS</span>
                <a href="/portfolio">View Project →</a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-image">Project Three</div>
              <div className="project-content">
                <h3>Project Three</h3>
                <p>
                  A brief description of another interesting
                  project you've created.
                </p>
                <span>React · Next.js</span>
                <a href="/portfolio">View Project →</a>
              </div>
            </article>
          </div>
        </section>

        {/* Contact */}
        <section className="contact-section">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Let's Work Together</h2>
          <p>
            Have a project or idea you'd like to discuss?
          </p>

          <a href="/about" className="btn primary">
            Contact Me
          </a>
        </section>
      </main>
    </>
  );
}