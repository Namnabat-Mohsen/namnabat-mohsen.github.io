import { techniques } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

function Group({ group, variant, delay }) {
  return (
    <Reveal className={`tech-group tech-group--${variant}`} delay={delay}>
      <div className="tech-group__head">
        <span className="tech-group__icon">{group.icon}</span>
        <div>
          <h3>{group.label}</h3>
          <p>{group.blurb}</p>
        </div>
        <span className="tech-group__count">{group.items.length}</span>
      </div>
      <div className="tech-chips">
        {group.items.map((t) => (
          <span key={t} className="tech-chip">
            {t}
          </span>
        ))}
      </div>
    </Reveal>
  )
}

export default function Techniques() {
  return (
    <section id="techniques" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Techniques & Instruments"
          title="Wet lab meets dry lab"
          sub="Hands-on experimental methods alongside computational modelling — the full pipeline from bench to simulation."
        />
        <div className="tech__grid">
          <Group group={techniques.wet} variant="wet" delay={0} />
          <Group group={techniques.dry} variant="dry" delay={120} />
        </div>
      </div>
    </section>
  )
}
