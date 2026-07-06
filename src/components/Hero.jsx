import { profile } from '../data/content'
import MoleculeBackground from './MoleculeBackground'
import { GitHub, LinkedIn, Mail, Orcid, Scholar, Download } from './icons'

export default function Hero() {
  const s = profile.socials
  return (
    <section id="home" className="hero">
      <MoleculeBackground />

      <div className="hero__inner">
        <div>
          <span className="hero__available">
            <span className="ping" />
            {profile.available}
          </span>

          <h1>
            {profile.name}
            <br />
            <span className="text-gradient">{profile.tagline}</span>
          </h1>

          <p className="hero__intro">{profile.intro}</p>

          <div className="hero__cta">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            {profile.resumeUrl ? (
              <a href={profile.resumeUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
                <Download width={16} height={16} /> Download CV
              </a>
            ) : (
              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
            )}
          </div>

          <div className="hero__socials">
            {s.github && (
              <a className="icon-btn" href={s.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GitHub />
              </a>
            )}
            {s.linkedin && (
              <a className="icon-btn" href={s.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedIn />
              </a>
            )}
            {s.orcid && (
              <a className="icon-btn" href={s.orcid} target="_blank" rel="noreferrer" aria-label="ORCID">
                <Orcid />
              </a>
            )}
            {s.scholar && (
              <a className="icon-btn" href={s.scholar} target="_blank" rel="noreferrer" aria-label="Google Scholar">
                <Scholar />
              </a>
            )}
            <a className="icon-btn" href={`mailto:${profile.email}`} aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="ring" />
          <div className="frame">
            {profile.photo ? (
              <img src={profile.photo} alt={profile.name} />
            ) : (
              <div className="placeholder">
                Add your portrait →<br />
                <code>public/assets/hero/portrait.jpg</code>
                <br />
                then set <code>profile.photo</code>
              </div>
            )}
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down">
        <span className="mouse" />
        Scroll
      </a>
    </section>
  )
}
