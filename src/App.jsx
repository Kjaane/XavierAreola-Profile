import { useState } from 'react'
import xavierPortrait from './assets/xavier-areola.jpg'
import './App.css'

const developments = [
  {
    name: 'The Estate Makati',
    brand: 'Ayala Land Premier',
    location: 'Makati City',
    type: 'Luxury residences',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Contemporary residence with a view of the city',
    tag: 'CITY LIVING',
  },
  {
    name: 'Park Central Towers',
    brand: 'Ayala Land Premier',
    location: 'Makati City',
    type: 'Parkside residences',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Elegant high-rise residence framed by greenery',
    tag: 'MAKATI CBD',
  },
  {
    name: 'The Lattice',
    brand: 'Alveo',
    location: 'Parklinks',
    type: 'Condominium residences',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Warm, modern apartment interior',
    tag: 'CONNECTED LIVING',
  },
  {
    name: 'Solstice',
    brand: 'Alveo',
    location: 'Circuit Makati',
    type: 'Condominium residences',
    image:
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Light-filled apartment overlooking the city',
    tag: 'MAKATI',
  },
  {
    name: 'Arbor Lanes',
    brand: 'Ayala Land Premier',
    location: 'Arca South',
    type: 'Garden residences',
    image:
      'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Peaceful landscaped residential community',
    tag: 'GREEN SANCTUARY',
  },
  {
    name: 'The Gentry Residences',
    brand: 'Alveo',
    location: 'Makati City',
    type: 'Condominium residences',
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    imageAlt: 'Modern residential tower in the city',
    tag: 'URBAN ADDRESS',
  },
]

const filters = ['All properties', 'Ayala Land Premier', 'Alveo']
const viberLink = 'viber://chat?number=%2B639690853940'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.25 10h11.5m-4.75-4.75L15.75 10 11 14.75" />
    </svg>
  )
}

function handleInquirySubmit(event) {
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const name = formData.get('name')
  const phone = formData.get('phone')
  const email = formData.get('email') || 'Not provided'
  const interest = formData.get('interest')
  const message = formData.get('message') || 'Please contact me to discuss suitable properties.'
  const subject = encodeURIComponent(`Property inquiry from ${name}`)
  const body = encodeURIComponent(
    `Name: ${name}\nPhone/Viber: ${phone}\nEmail: ${email}\nInterested in: ${interest}\n\nMessage:\n${message}`,
  )

  window.location.href = `mailto:xavier.areola97@gmail.com?subject=${subject}&body=${body}`
}

function App() {
  const [activeFilter, setActiveFilter] = useState(filters[0])
  const visibleDevelopments =
    activeFilter === 'All properties'
      ? developments
      : developments.filter((development) => development.brand === activeFilter)

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Xavier Areola property specialist home">
          <span className="wordmark-mark">XA</span>
          <span>
            <strong>XAVIER AREOLA</strong>
            <small>PROPERTY SPECIALIST</small>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#properties">Properties</a>
          <a href="#about">The experience</a>
          <a className="header-phone" href="tel:+639690853940">
            0969 085 3940
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
          alt="Modern home surrounded by greenery"
        />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow hero-eyebrow">Your goals, at the center</p>
          <h1>The right place<br />starts with <em>you.</em></h1>
          <p className="hero-copy">
            I’m Xavier Areola. I’ll help you explore Ayala Land Premier and
            Alveo properties to find the right fit for your goals.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#properties">
              Explore properties <ArrowIcon />
            </a>
            <a className="button button-viber" href={viberLink}>
              <span className="viber-mark" aria-hidden="true">V</span>
              Inquire on Viber
            </a>
          </div>
        </div>
        <div className="hero-note">
          <span className="note-line" />
          <span>Thoughtful spaces.<br />Meaningful places.</span>
        </div>
        <div className="hero-count">01 <span>/</span> 06</div>
      </section>

      <section className="intro" id="about">
        <p className="eyebrow">More than a property search</p>
        <div className="intro-content">
          <h2>A home for every<br /><em>next chapter.</em></h2>
          <div className="intro-copy">
            <p>
              From landmark city addresses to connected communities, explore
              residences by Ayala Land Premier and Alveo with personal guidance
              along the way.
            </p>
            <a className="text-link" href="#contact">
              Let’s find your place <ArrowIcon />
            </a>
          </div>
        </div>
        <div className="brand-strip" aria-label="Featured property brands">
          <span>FEATURED COLLECTIONS</span>
          <img
            className="brand-logo brand-logo-premier"
            src="/brands/ayala-land-premier.svg"
            alt="Ayala Land Premier"
          />
          <i />
          <img className="brand-logo brand-logo-alveo" src="/brands/alveo.png" alt="Alveo" />
        </div>
      </section>

      <section className="agent-section" aria-labelledby="agent-title">
        <div className="agent-photo-wrap">
          <img
            className="agent-photo"
            src={xavierPortrait}
            alt="Xavier Areola, property specialist"
          />
          <span className="agent-photo-caption">XAVIER AREOLA · PROPERTY SPECIALIST</span>
        </div>
        <div className="agent-content">
          <p className="eyebrow">A personal guide, every step</p>
          <h2 id="agent-title">The right product<br />for <em>your next move.</em></h2>
          <p className="agent-description">
            Choosing a property is personal. I’ll take the time to understand
            what matters to you, help compare the options, and guide you toward
            an Ayala Land Premier or Alveo property that suits your needs.
          </p>
          <div className="agent-points">
            <span><b>01</b> Understand your priorities</span>
            <span><b>02</b> Explore the right options</span>
            <span><b>03</b> Get guidance through your next steps</span>
          </div>
          <a
            className="button button-viber agent-button"
            href={viberLink}
          >
            <span className="viber-mark" aria-hidden="true">V</span>
            Inquire on Viber
          </a>
          <p className="agent-license">PRC No. 0023010</p>
        </div>
      </section>

      <section className="properties-section" id="properties">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The collection</p>
            <h2>Places to <em>belong.</em></h2>
          </div>
          <p className="section-description">
            A selection of residences to explore. Ask about current availability,
            pricing, and details for each development.
          </p>
        </div>

        <div className="property-toolbar">
          <div className="filters" role="group" aria-label="Filter properties">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? 'filter active' : 'filter'}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="result-count">
            {String(visibleDevelopments.length).padStart(2, '0')} DEVELOPMENTS
          </span>
        </div>

        <div className="property-grid">
          {visibleDevelopments.map((development, index) => (
            <article className="property-card" key={development.name}>
              <a
                className="property-image-link"
                href="#contact"
                aria-label={`Ask about ${development.name}`}
              >
                <img
                  className="property-image"
                  src={development.image}
                  alt={development.imageAlt}
                  loading={index > 1 ? 'lazy' : 'eager'}
                />
                <span className="property-tag">{development.tag}</span>
                <span className="image-arrow"><ArrowIcon /></span>
              </a>
              <div className="property-info">
                <div>
                  <p className="property-brand">{development.brand}</p>
                  <h3>{development.name}</h3>
                  <p className="property-meta">{development.type} <span>·</span> {development.location}</p>
                </div>
                <a className="card-link" href="#contact" aria-label={`Inquire about ${development.name}`}>
                  <ArrowIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="availability-note">
          Project details and availability may change. Please inquire for the
          latest information. This is an independent property portfolio and is
          not an official Ayala Land or Alveo website.
        </p>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro">
          <span className="contact-mark">XA</span>
          <p className="eyebrow">Let’s find the right fit</p>
          <h2>Tell me what<br /><em>matters to you.</em></h2>
          <p className="contact-description">
            Share what you’re looking for. I’ll help you compare your options
            and find a property that fits your plans.
          </p>
          <div className="contact-details">
            <a className="contact-method contact-viber" href={viberLink}>
              <span className="contact-method-icon" aria-hidden="true">V</span>
              <span><strong>Inquire on Viber</strong><small>Quickest way to reach me</small></span>
              <ArrowIcon />
            </a>
            <a className="contact-method" href="tel:+639690853940">
              <span className="contact-method-icon" aria-hidden="true">☎</span>
              <span><strong>0969 085 3940</strong><small>Call or text</small></span>
              <ArrowIcon />
            </a>
            <a className="contact-email" href="mailto:xavier.areola97@gmail.com">
              xavier.areola97@gmail.com
            </a>
            <a
              className="contact-facebook"
              href="https://facebook.com/xavier.areola.business"
              target="_blank"
              rel="noreferrer"
            >
              Facebook profile <ArrowIcon />
            </a>
          </div>
        </div>
        <form className="inquiry-form" onSubmit={handleInquirySubmit}>
          <div className="form-heading">
            <span className="form-step">01 / PROPERTY INQUIRY</span>
            <h3>Let’s start a conversation.</h3>
            <p>Tell me a little about what you need.</p>
          </div>
          <label>
            Your name *
            <input autoComplete="name" name="name" placeholder="e.g. Alex Santos" required />
          </label>
          <div className="form-row">
            <label>
              Phone or Viber *
              <input autoComplete="tel" name="phone" placeholder="09xx xxx xxxx" required type="tel" />
            </label>
            <label>
              Email address
              <input autoComplete="email" name="email" placeholder="you@example.com" type="email" />
            </label>
          </div>
          <label>
            What are you interested in? *
            <select defaultValue="" name="interest" required>
              <option disabled value="">Choose a property brand</option>
              <option>Ayala Land Premier</option>
              <option>Alveo</option>
              <option>Help me decide</option>
            </select>
          </label>
          <label>
            Tell me what you’re looking for
            <textarea name="message" placeholder="Preferred location, budget, timeline, or any questions..." rows="3" />
          </label>
          <button className="button form-submit" type="submit">
            Send inquiry <ArrowIcon />
          </button>
          <p className="form-note">
            This opens your email app with your inquiry addressed to Xavier.
            Review it and tap Send to submit.
          </p>
        </form>
      </section>

      <footer className="footer">
        <a className="wordmark footer-wordmark" href="#home">
          <span className="wordmark-mark">XA</span>
          <span>
            <strong>XAVIER AREOLA</strong>
            <small>PROPERTY SPECIALIST</small>
          </span>
        </a>
        <p>Ayala Land Premier &amp; Alveo property guidance · Philippines</p>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>
      <div className="mobile-contact-bar" aria-label="Quick contact">
        <a href={viberLink}><span className="viber-mark" aria-hidden="true">V</span> Inquire on Viber</a>
        <a href="tel:+639690853940">Call Xavier</a>
      </div>
    </main>
  )
}

export default App
