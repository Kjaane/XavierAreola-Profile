import { useState } from 'react'
import xavierPortrait from './assets/xavier-areola.jpg'
import { developments, illustrativePropertyImages } from './data/developments.js'
import './App.css'

const filters = ['All properties', 'Ayala Land Premier', 'Alveo']
const brochurePageSize = 4
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
  const [currentPage, setCurrentPage] = useState(0)
  const visibleDevelopments =
    activeFilter === 'All properties'
      ? developments
      : developments.filter((development) => development.brand === activeFilter)
  const pageCount = Math.ceil(visibleDevelopments.length / brochurePageSize)
  const pageDevelopments = visibleDevelopments.slice(
    currentPage * brochurePageSize,
    (currentPage + 1) * brochurePageSize,
  )

  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Xavier Areola Realty home">
          <span className="wordmark-mark">XA</span>
          <span>
            <strong>XAVIER AREOLA REALTY</strong>
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
          <p className="eyebrow hero-eyebrow">
            PRC-Accredited Real Estate Property Specialist<br />
            Ayala Land Premier
          </p>
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
          <span className="agent-photo-caption">PRC-ACCREDITED · AYALA LAND PREMIER PROPERTY SPECIALIST</span>
        </div>
        <div className="agent-content">
          <p className="eyebrow">PRC-Accredited Real Estate Property Specialist</p>
          <h2 id="agent-title">Your Ayala Land Premier<br /><em>property specialist.</em></h2>
          <p className="agent-description">
            As a PRC-accredited real estate property specialist for Ayala Land
            Premier, I’ll help you compare residences and guide you through each
            step toward the right home for your plans.
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
          <p className="agent-license">PRC ACCREDITED · NO. 0023010</p>
        </div>
      </section>

      <section className="properties-section" id="properties">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Online Brochure</p>
            <h2>Find a place to <em>belong.</em></h2>
          </div>
          <p className="section-description">
            Explore Ayala Land Premier and Alveo residences. Ask about current
            availability, pricing, and details.
          </p>
        </div>

        <div className="brochure-spread">
          <aside className="brochure-cover">
            <img
              className="brochure-cover-image"
              src={illustrativePropertyImages[0]}
              alt=""
              loading="lazy"
            />
            <div className="brochure-cover-shade" />
            <div className="brochure-cover-content">
              <span className="brochure-cover-kicker">CURATED RESIDENCES</span>
              <span className="brochure-monogram" aria-hidden="true">XA</span>
              <h3>Spaces to live<br />life <em>well.</em></h3>
              <p>Considered residences, chosen around what matters to you.</p>
              <a className="brochure-open-link" href="#brochure-properties">
                Open the brochure <ArrowIcon />
              </a>
              <span className="brochure-cover-footer">XAVIER AREOLA REALTY · PHILIPPINES</span>
            </div>
          </aside>
          <div className="brochure-page" id="brochure-properties">
            <div className="brochure-page-heading">
              <span>INSIDE THE BROCHURE</span>
              <span>PAGE {String(currentPage + 1).padStart(2, '0')} — {String(pageCount).padStart(2, '0')}</span>
            </div>
            <div className="property-toolbar">
              <div className="filters" role="group" aria-label="Filter properties">
                {filters.map((filter) => (
                  <button
                    className={activeFilter === filter ? 'filter active' : 'filter'}
                    key={filter}
                    onClick={() => {
                      setActiveFilter(filter)
                      setCurrentPage(0)
                    }}
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

            <div className="property-grid" key={`${activeFilter}-${currentPage}`}>
              {pageDevelopments.map((development, index) => (
                <article className="property-card" key={development.name}>
                  <a
                    className="property-image-link"
                    href="#contact"
                    aria-label={`Ask about ${development.name}`}
                  >
                    <img
                      className="property-image"
                      src={illustrativePropertyImages[(currentPage * brochurePageSize + index) % illustrativePropertyImages.length]}
                      alt="Illustrative residential lifestyle image"
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
                      <a
                        className="property-source"
                        href={development.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {development.officialLabel}
                      </a>
                    </div>
                    <a className="card-link" href="#contact" aria-label={`Inquire about ${development.name}`}>
                      <ArrowIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <nav className="brochure-pagination" aria-label="Browse brochure pages">
              <button
                className="brochure-page-turn brochure-page-previous"
                type="button"
                aria-label="Previous brochure page"
                disabled={currentPage === 0}
                onClick={() => setCurrentPage((page) => page - 1)}
              >
                <ArrowIcon />
              </button>
              <div className="brochure-page-position" aria-live="polite">
                PAGE {String(currentPage + 1).padStart(2, '0')} / {String(pageCount).padStart(2, '0')}
              </div>
              <button
                className="brochure-page-turn"
                type="button"
                aria-label="Next brochure page"
                disabled={currentPage === pageCount - 1}
                onClick={() => setCurrentPage((page) => page + 1)}
              >
                <ArrowIcon />
              </button>
            </nav>
            <p className="availability-note">
              Names and locations follow official developer catalogs. Listings may
              include completed or sold-out developments and do not guarantee
              current availability. Images are illustrative. This is an independent
              property portfolio, not an official Ayala Land or Alveo website.
            </p>
          </div>
        </div>
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
            <strong>XAVIER AREOLA REALTY</strong>
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
