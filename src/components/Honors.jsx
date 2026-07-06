import { honors } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

function List({ title, items }) {
  return (
    <div className="honor-col">
      <h3>{title}</h3>
      <ul className="honor-list">
        {items.map((it, i) => (
          <li key={i} className="honor-item">
            <span className="honor-year">{it.year}</span>
            <span className="honor-text">{it.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Honors() {
  return (
    <section id="honors" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Honors & Certifications"
          title="Awards & recognition"
          sub="Selected honors, awards, and professional certificates."
        />
        <div className="honors__grid">
          <Reveal>
            <List title="Honors & Awards" items={honors.awards} />
          </Reveal>
          <Reveal delay={120}>
            <List title="Certificates" items={honors.certificates} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
