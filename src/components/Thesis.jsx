import { thesis } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { ExternalLink } from './icons'

export default function Thesis() {
  return (
    <section id="thesis" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Thesis & University Projects"
          title="Research projects"
          sub="Featured academic work with diagrams, methods, and outcomes."
        />

        <div className="proj__grid">
          {thesis.map((p, i) => (
            <Reveal key={i} className="proj card" delay={(i % 3) * 80}>
              <div className="proj__media">
                {p.image ? <img src={p.image} alt={p.name} /> : <span>Add figure / diagram</span>}
              </div>
              <div className="proj__body">
                <span className="proj__name">{p.name}</span>
                <p className="proj__desc">{p.description}</p>
                <div className="proj__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                {p.outcome && (
                  <p className="pub__blurb" style={{ marginBottom: 14 }}>
                    ★ {p.outcome}
                  </p>
                )}
                <div className="proj__links">
                  <a href={p.url} className="btn btn-ghost" target="_blank" rel="noreferrer">
                    <ExternalLink width={16} height={16} /> Details
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
