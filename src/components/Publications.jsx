import { useEffect, useState } from 'react'
import { publications } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { ExternalLink, Close } from './icons'

export default function Publications() {
  const [active, setActive] = useState(null) // index of open figure, or null

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setActive(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Lock scroll while a figure is open
  useEffect(() => {
    document.body.style.overflow = active !== null ? 'hidden' : ''
    return () => (document.body.style.overflow = '')
  }, [active])

  const open = active !== null ? publications[active] : null

  return (
    <section id="publications" className="section section--alt">
      <div className="container">
        <SectionHead
          eyebrow="Publications"
          title="Peer-reviewed work"
          sub="Click a figure to view it full-size. Your name is highlighted in each author list."
        />

        <div className="pubs">
          {publications.map((p, i) => (
            <Reveal key={i} className="pub card" delay={i * 70}>
              <div
                className={`pub__thumb ${p.image ? 'pub__thumb--clickable' : ''}`}
                onClick={p.image ? () => setActive(i) : undefined}
              >
                {p.image ? (
                  <>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <span className="pub__zoom" aria-hidden="true">⤢</span>
                  </>
                ) : (
                  'Figure'
                )}
              </div>
              <div>
                <div className="pub__journal">{p.journal}</div>
                <h3 className="pub__title">{p.title}</h3>
                <p
                  className="pub__authors"
                  dangerouslySetInnerHTML={{ __html: highlightMe(p.authors) }}
                />
                <p className="pub__blurb">{p.blurb}</p>
                <div className="pub__links">
                  {p.links.map((l) => (
                    <a key={l.label} className="pub__link" href={l.url} target="_blank" rel="noreferrer">
                      {l.label} <ExternalLink width={12} height={12} />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {open && open.image && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <button className="lightbox__close" aria-label="Close" onClick={() => setActive(null)}>
            <Close />
          </button>
          <div className="lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__imgwrap">
              <img src={open.image} alt={open.title} />
            </div>
            <div className="lightbox__cap">
              <h4>{open.title}</h4>
              <p>{open.journal}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

// Bold the author's own name in the author list.
function highlightMe(authors) {
  return authors.replace(/Namnabat M/g, '<b>Namnabat M</b>')
}
