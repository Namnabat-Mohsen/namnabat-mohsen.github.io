import { software } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'

// Fallback badge: initials from the tool name
const initials = (name) =>
  name
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

export default function Software() {
  return (
    <section id="software" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Software & Tools"
          title="Tools of the trade"
          sub="Hover any tool to see what I use it for. Add logos in public/assets/software/."
        />
        <div className="soft__grid">
          {software.map((t, i) => (
            <Reveal key={t.name} className="soft" delay={(i % 6) * 60}>
              <div className="soft__logo">
                {t.logo ? <img src={t.logo} alt={t.name} /> : initials(t.name)}
              </div>
              <span className="soft__name">{t.name}</span>
              {t.note && <span className="soft__tip">{t.note}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
