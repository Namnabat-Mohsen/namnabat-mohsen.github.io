import { about } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead
          eyebrow="About"
          title="Turning molecular motion into insight"
          sub="A short introduction to who I am and what I research."
        />

        <div className="about__grid">
          <Reveal className="about__bio">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <div className="about__interests">
              {about.interests.map((tag) => (
                <span key={tag} className="pill">
                  {tag}
                </span>
              ))}
            </div>

            <div className="about__languages">
              <span className="about__label">Languages</span>
              <div className="about__langrow">
                {about.languages.map((l) => (
                  <span key={l.name} className="lang">
                    <b>{l.name}</b> <span className="lang__lvl">{l.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal className="about__stats" delay={120}>
            {about.stats.map((st) => (
              <div key={st.label} className="stat">
                <div className="num text-gradient">{st.num}</div>
                <div className="label">{st.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
