import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="site">
      <header className="navbar">
        <a href="/" className="logo">
          Muhammed Abdulla
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>

          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>

        <button
          className="menu-button"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <main>
        <section className="hero">
          <p className="eyebrow">DEVELOPER & BUILDER</p>

          <h1>
            Still early in the journey.
            <br />
            <span>Already building.</span>
          </h1>

          <p className="hero-description">
            I experiment with technology, turn ideas into working things,
            and explore whatever comes next.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              Explore Work
            </a>

            <a href="#contact" className="button button-secondary">
              Get in Touch
            </a>
          </div>

          <p className="location">Kasargod, India</p>
        </section>

        <section id="about" className="about-section">
          <div className="section-label">
            <span>01</span>
            <span>ABOUT</span>
          </div>

          <div className="about-content">
            <h2>
              I like turning ideas
              <br />
              into something real.
            </h2>

            <div className="about-text">
              <p>
                I enjoy experimenting with different technologies and building
                things that solve problems, make something easier, or are simply
                interesting to explore.
              </p>

              <p>
                When I see something that could be improved, I naturally start
                thinking about how I could make my own version of it.
              </p>

              <p>
                I'm still early in the journey, but I'm actively learning,
                experimenting, and turning ideas into working projects.
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="work-section">
          <div className="section-label">
            <span>02</span>
            <span>SELECTED WORK</span>
          </div>

          <div className="work-content">
            <div className="work-header">
              <div>
                <p className="work-type">BLENDER ADD-ON · RELEASED</p>

                <h2>CheckMate</h2>

                <p className="work-intro">
                  A project validation tool for Blender that helps artists catch
                  common issues before rendering, exporting, or delivering their
                  work.
                </p>
              </div>

              <div className="work-header-links">
                <a
                  href="/work/checkmate"
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  View Case Study →
                </a>
              </div>
            </div>

            <div className="work-panel">
              <div className="work-panel-top">
                <span>CHECKMATE</span>
                <span>v1.0.0</span>
              </div>

              <div className="work-panel-content">
                <div>
                  <span className="panel-label">PURPOSE</span>
                  <p>
                    Validate a Blender project before it moves to the next stage.
                  </p>
                </div>

                <div>
                  <span className="panel-label">VALIDATION</span>
                  <p>
                    Cameras, textures, materials, geometry, output settings,
                    transforms, and unused resources.
                  </p>
                </div>

                <div>
                  <span className="panel-label">REQUIREMENT</span>
                  <p>Blender 4.0+</p>
                </div>

                <div>
                  <span className="panel-label">STATUS</span>
                  <p>Public release · v1.0.0</p>
                </div>
              </div>
            </div>

            <div className="work-footer">
              <p>
                Built to make project checking easier before render, export, or
                delivery.
              </p>

              <a
                href="https://github.com/amstudio-in/CheckMate/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Get the release ↗
              </a>
            </div>
          </div>
        </section>

        <section className="experience-section">
          <div className="section-label">
            <span>03</span>
            <span>EXPERIENCE</span>
          </div>

          <div className="experience-content">
            <div className="experience-header">
              <div>
                <p className="experience-type">WEBSITE DEVELOPMENT · CLIENT WORK</p>

                <h2>Artiy Apps</h2>
              </div>

              <a
                href="https://artiyapps.pages.dev/"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Visit Website ↗
              </a>
            </div>

            <div className="experience-description">
              <p>
                Designed and developed a website for a handmade gift
                business, taking the project from concept to a deployed website.
              </p>
            </div>

            <div className="experience-details">
              <div>
                <span className="panel-label">ROLE</span>
                <p>Website Development</p>
              </div>

              <div>
                <span className="panel-label">TYPE</span>
                <p>Client Work</p>
              </div>

              <div>
                <span className="panel-label">STATUS</span>
                <p>Deployed</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="section-label">
            <span>04</span>
            <span>SKILLS</span>
          </div>

          <div className="skills-content">
            <div className="skills-group">
              <div className="skills-group-header">
                <span>01</span>
                <h3>Languages</h3>
              </div>

              <div className="skills-list">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>TypeScript</span>
                <span>Python</span>
                <span>C++</span>
                <span>Java</span>
                <span>Dart</span>
                <span>SQL</span>
                <span>C / Embedded C</span>
              </div>
            </div>

            <div className="skills-group">
              <div className="skills-group-header">
                <span>02</span>
                <h3>Frameworks & Development</h3>
              </div>

              <div className="skills-list">
                <span>React</span>
                <span>Flutter</span>
                <span>Node.js</span>
                <span>Android Development</span>
              </div>
            </div>

            <div className="skills-group">
              <div className="skills-group-header">
                <span>03</span>
                <h3>Tools & Workflow</h3>
              </div>

              <div className="skills-list">
                <span>Vite</span>
                <span>npm</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>VS Code</span>
                <span>Firebase</span>
                <span>JSON</span>
              </div>
            </div>

            <div className="skills-group">
              <div className="skills-group-header">
                <span>04</span>
                <h3>3D & Creative Development</h3>
              </div>

              <div className="skills-list">
                <span>Blender</span>
                <span>Blender Python API</span>
              </div>
            </div>

            <div className="skills-group">
              <div className="skills-group-header">
                <span>05</span>
                <h3>AI & Local Development</h3>
              </div>

              <div className="skills-list">
                <span>LM Studio</span>
                <span>Local AI</span>
                <span>AI-assisted Development</span>
                <span>AI APIs</span>
              </div>
            </div>

            <div className="skills-group">
              <div className="skills-group-header">
                <span>06</span>
                <h3>Deployment</h3>
              </div>

              <div className="skills-list">
                <span>GitHub Pages</span>
                <span>Cloudflare Pages</span>
              </div>
            </div>
          </div>
        </section>

        <section className="exploring-section">
          <div className="section-label">
            <span>05</span>
            <span>EXPLORING</span>
          </div>

          <div className="exploring-content">
            <h2>
              Always looking for
              <br />
              something interesting to build.
            </h2>

            <p>
              I'm currently exploring AI APIs, AI-assisted development, Blender
              tools, and lower-level programming. The goal isn't to stick to one
              category, it's to keep learning and see what can be turned into
              something useful.
            </p>

            <div className="exploring-list">
              <div>
                <span>01</span>
                <p>AI APIs & AI-assisted Development</p>
              </div>

              <div>
                <span>02</span>
                <p>Blender Tools & Python API</p>
              </div>

              <div>
                <span>03</span>
                <p>C / Embedded Development</p>
              </div>

              <div>
                <span>04</span>
                <p>Apps, Websites & Experimental Projects</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-label">
            <span>06</span>
            <span>CONTACT</span>
          </div>

          <div className="contact-content">
            <p className="contact-eyebrow">HAVE AN IDEA WORTH BUILDING?</p>

            <h2>
              Let's build
              <br />
              something.
            </h2>

            <p className="contact-description">
              Whether it's an interesting project, a website, an app, or simply
              an idea you'd like to explore, feel free to reach out.
            </p>

            <a
              href="mailto:muhmmdabdlla@gmail.com"
              className="contact-email"
            >
              muhmmdabdlla@gmail.com ↗
            </a>

            <div className="social-links">
              <a
                href="https://github.com/muhmmdabdlla"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/muhammed-abdulla-8ab528373"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/muhm_d__"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://x.com/muhmd_abdlla"
                target="_blank"
                rel="noreferrer"
              >
                X
              </a>

              <a
                href="https://www.threads.com/@muhm_d__"
                target="_blank"
                rel="noreferrer"
              >
                Threads
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <span>Muhammed Abdulla</span>
            <span>Developer & Builder</span>
          </div>

          <div className="footer-studio">
            <span>AM Studio</span>
            <p>Things I build, experiment with, and release.</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Muhammed Abdulla</span>

          <span>Kasargod, India</span>
        </div>
      </footer>
      </div>
  )
}

export default App