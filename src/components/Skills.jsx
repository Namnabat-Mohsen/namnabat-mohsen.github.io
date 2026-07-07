import { useEffect, useRef, useState } from 'react'
import { skills } from '../data/content'
import SectionHead from './SectionHead'

// Map a 0–100 level to a qualitative label (no percentages shown).
const levelLabel = (n) =>
  n >= 90 ? 'Expert' : n >= 80 ? 'Advanced' : n >= 70 ? 'Proficient' : 'Familiar'

function SkillGroup({ group, icon, items, delay }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.25 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`skill-group reveal ${shown ? 'in' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3>
        <span className="ico">{icon}</span>
        {group}
      </h3>
      {items.map((sk) => (
        <div className="skill" key={sk.name}>
          <div className="skill__top">
            <span>{sk.name}</span>
            <span className="lvl">{levelLabel(sk.level)}</span>
          </div>
          <div className="skill__bar">
            <div
              className="skill__fill"
              style={{ width: shown ? `${sk.level}%` : 0 }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Skill Sets"
          title="Technical toolkit"
          sub="Proficiency across computational biology, cheminformatics, and data science."
        />
        <div className="skills__grid">
          {skills.map((g, i) => (
            <SkillGroup key={g.group} {...g} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
