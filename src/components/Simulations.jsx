import { useEffect, useState } from 'react'
import { simulations } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { Play, Close } from './icons'

export default function Simulations() {
  const [active, setActive] = useState(null) // index of open lightbox

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock scroll while modal open
  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [active])

  const sim = active !== null ? simulations[active] : null

  return (
    <section id="simulations" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="MD Simulation Gallery"
          title="Molecular dynamics in motion"
          sub="Click a trajectory to play it fullscreen. Drop .mp4/.webm files into public/assets/simulations/."
        />

        <div className="sim__grid">
          {simulations.map((s, i) => (
            <Reveal key={i} className="sim" delay={(i % 3) * 80} onClick={() => setActive(i)}>
              <div className="sim__media">
                {s.video ? (
                  <video
                    src={s.video}
                    poster={s.poster || undefined}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                  />
                ) : (
                  <div className="sim__placeholder">
                    Add trajectory video →<br />
                    <code>public/assets/simulations/</code>
                  </div>
                )}
                <div className="sim__play">
                  <span className="btn-circle">
                    <Play />
                  </span>
                </div>
              </div>
              <div className="sim__body">
                <div className="sim__title">{s.title}</div>
                <p className="sim__caption">{s.caption}</p>
                {s.source && (
                  <a
                    className="sim__source"
                    href={s.source.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {s.source.label} ↗
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {sim && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
            <Close />
          </button>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__media">
              {sim.video ? (
                <video src={sim.video} poster={sim.poster || undefined} controls autoPlay loop muted playsInline />
              ) : (
                <div className="sim__placeholder" style={{ position: 'static', height: '100%' }}>
                  No video yet — add one at <code>{`content.js → simulations`}</code>
                </div>
              )}
            </div>
            <div className="lightbox__cap">
              <h4>{sim.title}</h4>
              <p>{sim.caption}</p>
              {sim.source && (
                <a className="sim__source" href={sim.source.url} target="_blank" rel="noreferrer">
                  {sim.source.label} ↗
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
