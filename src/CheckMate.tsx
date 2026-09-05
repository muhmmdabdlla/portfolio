import { useEffect, useState } from 'react'
import './CheckMate.css'

function CheckMate() {
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
    document.title =
        'CheckMate - Blender Project Validation | Muhammed Abdulla'

    const description =
        'CheckMate is a Blender add-on that helps artists validate their projects before rendering, exporting, or delivery.'

    const descriptionMeta = document.querySelector(
        'meta[name="description"]',
    )

    descriptionMeta?.setAttribute('content', description)
    }, [])

  return (
    <div className="checkmate-page">
      <header className="navbar">
        <a href="/portfolio/" className="logo">
          Muhammed Abdulla
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="/#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="/#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="/#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>
          <a href="/#contact" onClick={() => setMenuOpen(false)}>
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
        <section className="case-hero">
          <p className="case-eyebrow">01 — CHECKMATE</p>

          <h1>
            Project validation
            <br />
            <span>for Blender.</span>
          </h1>

          <p className="case-intro">
            CheckMate is a Blender add-on that helps artists validate their
            projects before rendering, exporting, or delivery.
          </p>

          <div className="case-meta">
            <div>
              <span>TYPE</span>
              <strong>Blender Add-on</strong>
            </div>

            <div>
              <span>REQUIREMENT</span>
              <strong>Blender 4.0+</strong>
            </div>

            <div>
              <span>RELEASE</span>
              <strong>v1.0.0</strong>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">02 — THE PROBLEM</div>

          <div className="case-content">
            <h2>
              Small project issues can become
              <span> expensive problems later.</span>
            </h2>

            <p>
              A Blender project can contain issues that are easy to overlook
              before rendering, exporting, or handing the project over.
            </p>

            <p>
              CheckMate was built around a simple idea: make those issues
              visible before they become a problem.
            </p>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">03 — THE IDEA</div>

          <div className="case-content">
            <h2>
              A simple validation layer
              <span> inside Blender.</span>
            </h2>

            <p>
              Instead of manually checking different parts of a project,
              CheckMate brings several useful checks together in one place.
            </p>

            <p>
              The goal is not to replace the artist's workflow, but to give
              them a quick way to identify things worth fixing.
            </p>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">04 — VALIDATION SYSTEM</div>

          <div className="case-content">
            <h2>
              Different issues,
              <span> clearly grouped.</span>
            </h2>

            <div className="validation-list">
              <div>
                <span>ERRORS</span>
                <p>Missing Active Camera</p>
                <p>Missing Texture File</p>
              </div>

              <div>
                <span>WARNINGS</span>
                <p>Object Has No Material</p>
                <p>Empty Material Slot</p>
                <p>Non-Manifold Geometry</p>
                <p>Output Path Not Configured</p>
                <p>Unapplied Rotation</p>
                <p>Unapplied Scale</p>
              </div>

              <div>
                <span>INFORMATION</span>
                <p>Unused Material</p>
                <p>Unused Image</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">05 — FEATURES</div>

          <div className="case-content">
            <h2>
              More than a list
              <span> of problems.</span>
            </h2>

            <div className="feature-grid">
              <div>
                <span>01</span>
                <h3>Health Score</h3>
                <p>A quick overview of the project's validation state.</p>
              </div>

              <div>
                <span>02</span>
                <h3>Readiness Status</h3>
                <p>A clear indication of the project's current state.</p>
              </div>

              <div>
                <span>03</span>
                <h3>Issue Summary</h3>
                <p>A concise overview of detected issues.</p>
              </div>

              <div>
                <span>04</span>
                <h3>Grouped Results</h3>
                <p>Validation results organized by issue type.</p>
              </div>

              <div>
                <span>05</span>
                <h3>Expandable Details</h3>
                <p>More information available when needed.</p>
              </div>

              <div>
                <span>06</span>
                <h3>Recommendations</h3>
                <p>Useful guidance alongside detected issues.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="case-label">06 — RESULT</div>

          <div className="case-content">
            <h2>
              From an idea to a
              <span> released tool.</span>
            </h2>

            <p>
              CheckMate became a working Blender add-on focused on project
              validation and readiness.
            </p>

            <p>
              The first public release, v1.0.0, is available for Blender 4.0+
              and published on GitHub.
            </p>

            <div className="release-box">
              <div>
                <span>VERSION</span>
                <strong>v1.0.0</strong>
              </div>

              <div>
                <span>BLENDER</span>
                <strong>4.0+</strong>
              </div>

              <div>
                <span>STATUS</span>
                <strong>Released</strong>
              </div>
            </div>

            <div className="case-actions">
              <a
                href="https://github.com/amstudio-in/CheckMate"
                target="_blank"
                rel="noreferrer"
                className="case-button case-button-primary"
              >
                View on GitHub
              </a>

              <a
                href="https://github.com/amstudio-in/CheckMate/releases/latest"
                target="_blank"
                rel="noreferrer"
                className="case-button case-button-secondary"
              >
                View Release
              </a>
            </div>
          </div>
        </section>

        <section className="case-next">
          <a href="/portfolio/#work">← Back to selected work</a>
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

export default CheckMate