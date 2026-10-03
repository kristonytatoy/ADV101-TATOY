export default function About() {
  return (
    <main className="about-page">
      <section className="about-content">

        {/* Left side */}
        <div className="about-text">

          <h1>
            Hi, I'm a student who
            <span> loves to create.</span>
          </h1>

          <p className="about-description">
            I’m interested in technology, sports, gaming, and coding.
            I enjoy learning new skills and turning ideas into simple,
            useful projects.
          </p>

          <p className="about-description">
            I’m always looking for opportunities to improve my skills,
            explore new technologies, and create things that people can use in the future.
          </p>


          {/* Social links */}
          <div className="social-links">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kristonytatoy112@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
            >
              Gmail
            </a>

            <span>•</span>

            <a
              href="https://www.facebook.com/kristonytatoy11"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              Facebook
            </a>

            <span>•</span>

            <a
              href="https://github.com/kristonytatoy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </div>

        </div>

        {/* Right side */}
        <div className="about-image-wrapper">
          <div className="about-image">
            <img src="/profile.jpg" alt="Profile" />
          </div>

          <div className="image-caption">
            <span>Student • Creator • Developer</span>
          </div>
        </div>

      </section>
    </main>
  );
}
