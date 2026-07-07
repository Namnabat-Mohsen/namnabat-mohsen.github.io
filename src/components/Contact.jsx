import { profile } from '../data/content'
import SectionHead from './SectionHead'
import Reveal from './Reveal'
import { Mail, MapPin, Phone, GitHub, LinkedIn, Orcid, Scholar } from './icons'

export default function Contact() {
  const s = profile.socials

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Portfolio contact — ${data.get('name')}`)
    const body = encodeURIComponent(`${data.get('message')}\n\n— ${data.get('name')} (${data.get('email')})`)
    // Opens the visitor's mail client. Swap for a form service (Formspree, etc.) if preferred.
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Contact"
          title="Let’s collaborate"
          sub="Open to research collaborations, PhD positions, and interesting problems in computational biology."
        />

        <div className="contact__grid">
          <Reveal>
            <p className="contact__lead">
              The quickest way to reach me is by email — or use the form and it’ll open your mail app.
            </p>
            <div className="contact__list">
              <a className="contact__row" href={`mailto:${profile.email}`}>
                <Mail className="ico" />
                <span>
                  <span className="label">Email</span>
                  <br />
                  <span className="val">{profile.email}</span>
                </span>
              </a>
              {profile.phone && (
                <a className="contact__row" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
                  <Phone className="ico" />
                  <span>
                    <span className="label">Phone</span>
                    <br />
                    <span className="val">{profile.phone}</span>
                  </span>
                </a>
              )}
              <div className="contact__row">
                <MapPin className="ico" />
                <span>
                  <span className="label">Location</span>
                  <br />
                  <span className="val">{profile.location}</span>
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="form" onSubmit={onSubmit}>
              <input name="name" type="text" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Your email" required />
              <textarea name="message" placeholder="Your message" required />
              <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center' }}>
                Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>

      <footer className="footer">
        <div className="footer__socials">
          {s.github && (
            <a className="icon-btn" href={s.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <GitHub />
            </a>
          )}
          {s.linkedin && (
            <a className="icon-btn" href={s.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedIn />
            </a>
          )}
          {s.orcid && (
            <a className="icon-btn" href={s.orcid} target="_blank" rel="noreferrer" aria-label="ORCID">
              <Orcid />
            </a>
          )}
          {s.scholar && (
            <a className="icon-btn" href={s.scholar} target="_blank" rel="noreferrer" aria-label="Scholar">
              <Scholar />
            </a>
          )}
        </div>
        © {new Date().getFullYear()} {profile.name}. Built with React + Vite.
      </footer>
    </section>
  )
}
