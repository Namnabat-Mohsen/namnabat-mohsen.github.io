import { github } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { GitHub, Star, ExternalLink } from './icons'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          eyebrow="GitHub Projects"
          title="Code & open source"
          sub="Curated repositories. Add a screenshot or GIF per repo in public/assets/github/."
        />

        <div className="proj__grid">
          {github.repos.map((r, i) => (
            <Reveal key={i} className="proj card" delay={(i % 3) * 80}>
              <div className="proj__media">
                {r.image ? (
                  <img src={r.image} alt={r.name} />
                ) : (
                  <span>Add screenshot / GIF</span>
                )}
              </div>
              <div className="proj__body">
                <div className="proj__head">
                  <span className="proj__name">{r.name}</span>
                  <span className="proj__stars">
                    <Star /> {r.stars}
                  </span>
                </div>
                <p className="proj__desc">{r.description}</p>
                <div className="proj__tags">
                  {r.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="proj__links">
                  <a href={r.url} className="btn btn-ghost" target="_blank" rel="noreferrer">
                    <GitHub width={16} height={16} /> Repo
                  </a>
                  <a href={r.url} className="btn btn-ghost" target="_blank" rel="noreferrer">
                    <ExternalLink width={16} height={16} /> Live
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
