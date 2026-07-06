import { education } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

export default function Education() {
  return (
    <section id="education" className="section section--alt">
      <div className="container">
        <SectionHead eyebrow="Education" title="Academic background" />

        <div className="timeline">
          {education.map((e, i) => (
            <Reveal key={i} className="tl-item" delay={i * 90}>
              <div className="tl-card">
                <div className="tl-logo">
                  {e.logo ? <img src={e.logo} alt={e.institution} /> : 'LOGO'}
                </div>
                <div>
                  <div className="tl-date">{e.date}</div>
                  <div className="tl-degree">{e.degree}</div>
                  <div className="tl-inst">{e.institution}</div>
                  <p className="tl-desc">{e.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
