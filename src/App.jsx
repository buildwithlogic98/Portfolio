import FadeContent from './components/FadeContent';
import Aurora from './components/Aurora';
import Icon from './components/Icons';
import { profile, stats, roadmap, projects, journey, auroraColors } from './data';

function Nav() {
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">Karan<span className="nav-dot">.</span></a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#projects">Projects</a>
        <a href="#journey">Journey</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-aurora">
        <Aurora
          colorStops={auroraColors}
          amplitude={0.9}
          blend={0.65}
          height={0.5}
          glow={0.35}        /* ↓ less light spill */
          brightness={0.55}  /* ↓ overall dimmer */
          opacity={0.8}      /* ↓ whole effect toned down */
          layers={2}
          speed={0.9}
        />
      </div>
      <div className="hero-fade" />
      <FadeContent
        className="hero-content"
        trigger="mount"
        duration={1.4}
        ease="power3.out"
        stagger={0.12}
        delay={0.4}
      >
        <p className="hero-eyebrow">{profile.role}</p>
        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="#roadmap">See my roadmap</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </FadeContent>
      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <Icon name="chevron-down" size={22} />
      </a>
    </header>
  );
}

function Section({ id, kicker, title, children }) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <FadeContent duration={1} ease="power3.out" threshold={0.15}>
          <p className="kicker">{kicker}</p>
          <h2 className="section-title">{title}</h2>
        </FadeContent>
        {children}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Section id="about" kicker="01 · About" title="Who I am">
          <FadeContent duration={1.1} ease="power3.out" threshold={0.15}>
            <div className="about-grid">
              <div className="about-text">
                {profile.about.map((para, i) => <p key={i}>{para}</p>)}
              </div>
              <div className="about-stats">
                {stats.map((s) => (
                  <div className="stat-card" key={s.label}>
                    <span className="stat-value">{s.value}</span>
                    <span className="stat-label">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeContent>
        </Section>

        <Section id="roadmap" kicker="02 · Roadmap" title="Where I'm headed">
          <FadeContent className="roadmap-grid" stagger={0.15} duration={1} threshold={0.15}>
            {Object.entries(roadmap).map(([stage, { icon, items, note }]) => (
              <div className="roadmap-card" key={stage}>
                <span className="roadmap-icon"><Icon name={icon} size={26} /></span>
                <h3>{stage}</h3>
                <p className="roadmap-note">{note}</p>
                <div className="chips">
                  {items.map((item) => <span className="chip" key={item}>{item}</span>)}
                </div>
              </div>
            ))}
          </FadeContent>
        </Section>

        <Section id="projects" kicker="03 · Projects" title="What I've made so far">
          <FadeContent className="projects-grid" stagger={0.15} duration={1.1} threshold={0.1}>
            {projects.map((p) => (
              <article className={`project-card${p.soon ? ' soon' : ''}`} key={p.title}>
                <div className="project-top">
                  <span className="project-icon"><Icon name={p.icon} size={24} /></span>
                  <div className="project-links">
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>}
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>}
                  </div>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="chips">
                  {p.tech.map((t) => <span className="chip chip-sm" key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </FadeContent>
        </Section>

        <Section id="journey" kicker="04 · Journey" title="My journey so far">
          <FadeContent className="timeline" stagger={0.15} duration={1} threshold={0.15}>
            {journey.map((item) => (
              <div className="timeline-item" key={item.title}>
                <span className="timeline-dot" />
                <div className="timeline-body">
                  <span className="timeline-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline-place">{item.place}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </div>
              </div>
            ))}
          </FadeContent>
        </Section>

        <Section id="contact" kicker="05 · Contact" title="Let's connect">
          <FadeContent duration={1} threshold={0.2}>
            <p className="contact-text">{profile.contactBlurb}</p>
            <div className="contact-row">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                <Icon name="mail" size={16} /> {profile.email}
              </a>
              {profile.resume && (
                <a className="btn btn-ghost" href={profile.resume} target="_blank" rel="noreferrer">Résumé</a>
              )}
              {profile.phone && (
                <a className="btn btn-ghost" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  <Icon name="phone" size={15} /> {profile.phone}
                </a>
              )}
              {profile.github && (
                <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">
                  <Icon name="github" size={16} /> GitHub
                </a>
              )}
              {profile.linkedin && (
                <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
                  <Icon name="linkedin" size={16} /> LinkedIn
                </a>
              )}
            </div>
          </FadeContent>
        </Section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name} · Built with React + Vite &{' '}
          <a href="https://reactbits.dev" target="_blank" rel="noreferrer">React Bits</a>
        </p>
      </footer>
    </>
  );
}