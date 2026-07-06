import Reveal from './Reveal'

export default function SectionHead({ eyebrow, title, sub }) {
  return (
    <Reveal className="section-head">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </Reveal>
  )
}
