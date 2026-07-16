import { useState } from 'react'
import './App.css'

const HERO_VIDEO =
  '/Video/PixVerse_V6_Image_Text_360P_Keep_the_character.mp4'

const PROJECT_VIDEO =
  '/Video/PixVerse_V6_Image_Text_360P_Keep_the_character (1).mp4'

const projects = [
  {
    number: '01',
    name: 'Style Avenue',
    category: 'Full-Stack E-Commerce',
    technology: 'Next.js / Express / MySQL',
  },
  {
    number: '02',
    name: 'SyncTalk',
    category: 'Real-Time Chat Application',
    technology: 'React / Node.js / Socket.IO',
  },
  {
    number: '03',
    name: 'LuxWatch',
    category: 'Luxury Watch Store',
    technology: 'React / Express / MySQL',
  },
  {
    number: '04',
    name: 'CUVAS Admission System',
    category: 'University Admission Portal',
    technology: 'Laravel / MySQL',
  },
]

function Mark() {
  return (
    <span className="mark" aria-hidden="true">
      H
    </span>
  )
}

function App() {
  const [muted, setMuted] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero" id="top">
        <video
          className="heroVideo"
          autoPlay
          loop
          muted={muted}
          playsInline
          preload="auto"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        <div className="wash" />

        <header className="nav">
          <a
            className="brand"
            href="#top"
            aria-label="Rao Huzaifa portfolio home"
          >
            <Mark />
            <span>RAO HUZAIFA</span>
          </a>

          <button
            type="button"
            className="menuButton"
            onClick={() => setMenuOpen((currentState) => !currentState)}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
            <i />
          </button>

          <nav
            id="primary-navigation"
            className={menuOpen ? 'links open' : 'links'}
            aria-label="Primary navigation"
          >
            <a href="#about" onClick={closeMenu}>
              About
            </a>

            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </header>

        <div className="eyebrow">
          <span>Full-Stack Web Developer</span>
          <span>Lahore, Pakistan · 2026</span>
        </div>

        <div className="heroCopy">
          <p className="kicker">Web development with creativity</p>

          <h1>
            Built to
            <br />
            <em>perform.</em>
          </h1>
        </div>

        <div className="heroFooter">
          <p>
            Modern digital experiences
            <br />
            engineered for real impact.
          </p>

          <a
            className="roundLink"
            href="#about"
            aria-label="Discover more about Rao Huzaifa"
          >
            ↘
          </a>

          <button
            type="button"
            className="sound"
            onClick={() => setMuted((currentState) => !currentState)}
            aria-label={muted ? 'Turn sound on' : 'Turn sound off'}
          >
            <span className={muted ? '' : 'playing'}>
              <i />
              <i />
              <i />
              <i />
            </span>

            {muted ? 'Sound off' : 'Sound on'}
          </button>
        </div>
      </section>

      {/* MOVING TICKER */}
      <div className="ticker" aria-hidden="true">
        <div>
          REACT — NEXT.JS — NODE.JS — LARAVEL — MYSQL — AI INTEGRATION —
          REACT — NEXT.JS — NODE.JS — LARAVEL — MYSQL — AI INTEGRATION —
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="story" id="about">
        <div className="sectionIndex">01 / About me</div>

        <div className="storyBody">
          <p className="overline">Developer with a creative mindset</p>

          <h2>
            Ideas shaped into
            <br />
            powerful <i>products.</i>
          </h2>

          <div className="storyDetails">
            <p>
              I&apos;m Rao Huzaifa, a Full-Stack Web Developer based in
              Lahore, Pakistan. I create modern, responsive and scalable
              websites using React, Next.js, Node.js, Laravel and MySQL.
            </p>

            <p>
              My approach combines clean user interfaces with reliable
              backend architecture. I focus on writing maintainable code,
              solving real-world problems and building digital products that
              deliver meaningful user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT */}
      <section className="edition" id="projects">
        <div className="editionMedia">
          <video autoPlay loop muted playsInline preload="metadata">
            <source src={PROJECT_VIDEO} type="video/mp4" />
          </video>

          <span className="frame frameA" />
          <span className="frame frameB" />

          <p className="vertical">
            Portfolio / Full-stack project / 001
          </p>
        </div>

        <div className="editionCopy">
          <div className="sectionIndex">02 / Featured project</div>

          <div>
            <p className="overline">Style Avenue E-Commerce</p>

            <h2>
              Designed to
              <br />
              <i>convert.</i>
            </h2>
          </div>

          <div className="editionMeta">
            <span>
              Frontend
              <br />
              <b>Next.js</b>
            </span>

            <span>
              Backend
              <br />
              <b>Express.js</b>
            </span>

            <span>
              Database
              <br />
              <b>MySQL</b>
            </span>
          </div>
        </div>
      </section>

      {/* PROJECT LIST */}
      <section className="projectsList">
        <div className="projectsHeader">
          <div className="sectionIndex">03 / Selected work</div>

          <p>
            A selection of full-stack applications created with modern
            technologies.
          </p>
        </div>

        <div className="projectRows">
          {projects.map((project) => (
            <article className="projectRow" key={project.number}>
              <span className="projectNumber">{project.number}</span>

              <h3>{project.name}</h3>

              <p>{project.category}</p>

              <span className="projectTechnology">
                {project.technology}
              </span>

              <span className="projectArrow" aria-hidden="true">
                ↗
              </span>
            </article>
          ))}
        </div>
      </section>

      {/* STATEMENT SECTION */}
      <section className="statement">
        <p>Clean code. Meaningful experiences.</p>

        <h2>
          Development with
          <br />
          <span>creative direction.</span>
        </h2>

        <Mark />
      </section>

      {/* CONTACT FOOTER */}
      <footer id="contact">
        <div className="footerTop">
          <p>Have a project or opportunity?</p>

          <a href="mailto:huzaifaraoooo@gmail.com">
            Start a conversation <span>↗</span>
          </a>
        </div>

        <div className="footerWord">HUZAIFA</div>

        <div className="footerBottom">
          <span>© 2026 RAO HUZAIFA</span>

          <span>LAHORE, PAKISTAN / AVAILABLE WORLDWIDE</span>

          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  )
}

export default App