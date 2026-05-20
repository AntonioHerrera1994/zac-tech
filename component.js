(function () {

  /* ══════════════════════════════════════
     NOSCRIPT SEO BLOCK
     Crawlers que no ejecutan JS leen esto.
     Usuarios nunca lo ven (display:none).
  ══════════════════════════════════════ */
  const NOSCRIPT_SEO = `
<noscript>
  <style>.zt-seo-links{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;}</style>
  <nav class="zt-seo-links" aria-hidden="true">
    <a href="/">Home</a>
    <a href="/about-us">About Us</a>
    <a href="/contact">Contact</a>
    <a href="/warpage">ASIC Warpage Analysis</a>
    <a href="/patronage">Patronage</a>

    <span>Services</span>
    <a href="/reliability-tests">Reliability Tests</a>
    <a href="/package-qualification-testing">Package Qualification Testing</a>
    <a href="/esd-latchup-testing">ESD &amp; Latch-Up</a>
    <a href="/failure-analysis">Failure Analysis</a>
    <a href="/forensic-services">Forensic Services</a>

    <span>Markets</span>
    <a href="/artificial-intelligence">Artificial Intelligence</a>
    <a href="/aerospace-defense">Aerospace and Defense</a>
    <a href="/automotive">Automotive</a>
    <a href="/industrial">Industrial</a>
    <a href="/medical">Medical</a>
    <a href="/transportation">Transportation</a>
  </nav>
</noscript>
`;

  /* ══════════════════════════════════════
     NAVBAR HTML
  ══════════════════════════════════════ */
  const NAV_HTML = `
  <style>
/* ═══════════════════════════════════
   NAVBAR — Sunset Palette
═══════════════════════════════════ */
nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  padding: 0 60px; height: 75px;
  display: flex; align-items: center; justify-content: space-between;
  transition: background .4s, backdrop-filter .4s;
}
nav.scrolled {
  background: rgba(13, 8, 6, 0.92);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid rgba(212, 86, 26, 0.12);
}

/* Logo */
.zt-logo {
  font-family: 'Syne', sans-serif; font-weight: 800;
  font-size: 1.3rem; color: #FFF8F2;
  letter-spacing: -.02em; text-decoration: none;
}
.zt-logo span {
  background: linear-gradient(90deg, #E8720A, #F5C840);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Nav links */
.zt-nav-links { display: flex; gap: 36px; list-style: none; }
.zt-nav-links a {
  color: rgb(255, 255, 255);
  text-decoration: none;
  font-size: .85rem; font-weight: 400;
  letter-spacing: .04em; text-transform: uppercase;
  transition: color .2s;
}
.zt-nav-links a:hover,
.zt-nav-links a.active { color: #F0A820; }

/* ── Hamburger (mobile) ── */
.zt-nav-hamburger {
  display: none; flex-direction: column; gap: 5px;
  background: none; border: none; cursor: pointer;
  padding: 4px;
}
.zt-nav-hamburger span {
  display: block; width: 22px; height: 2px;
  background: #FFF8F2; border-radius: 2px;
  transition: transform .3s, opacity .3s;
}
.zt-nav-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.zt-nav-hamburger.open span:nth-child(2) { opacity: 0; }
.zt-nav-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* ══════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════ */
.zt-mobile-menu {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #0D0806;
  flex-direction: column;
  z-index: 99;
  overflow-y: auto;
  padding: 90px 0 40px;
}
.zt-mobile-menu.open { display: flex; }

.zt-mobile-menu::before {
  content: '';
  position: absolute;
  top: 74px; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg,
    transparent 0%, #C43010 25%, #E8720A 50%, #F0A820 75%, transparent 100%
  );
  opacity: 0.4;
}

.zt-mobile-menu::after {
  content: '';
  position: fixed;
  top: 74px; left: 50%;
  transform: translateX(-50%);
  width: 320px; height: 200px;
  background: radial-gradient(ellipse,
    rgba(232, 114, 10, 0.08) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.zt-mobile-item {
  border-bottom: 1px solid rgba(212, 86, 26, 0.08);
}

.zt-mobile-item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  height: 62px;
  cursor: pointer;
  text-decoration: none;
  transition: background .2s;
}
.zt-mobile-item-header:hover {
  background: rgba(232, 114, 10, 0.05);
}

.zt-mobile-item-header span {
  font-family: 'Syne', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  color: #FFF8F2;
  letter-spacing: .06em;
  text-transform: uppercase;
}

.zt-mobile-arrow {
  width: 28px; height: 28px;
  border: 1px solid rgba(212, 86, 26, 0.2);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  transition: transform .3s, border-color .3s, background .3s;
  flex-shrink: 0;
}
.zt-mobile-arrow svg {
  width: 12px; height: 12px;
  stroke: rgba(240, 168, 32, 0.5);
  transition: stroke .3s;
}

.zt-mobile-item.open .zt-mobile-arrow {
  transform: rotate(180deg);
  border-color: rgba(232, 114, 10, 0.5);
  background: rgba(232, 114, 10, 0.1);
}
.zt-mobile-item.open .zt-mobile-arrow svg { stroke: #F0A820; }
.zt-mobile-item.open .zt-mobile-item-header span { color: #F0A820; }

.zt-mobile-submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height .38s cubic-bezier(.4,0,.2,1);
  background: rgba(232, 114, 10, 0.03);
}
.zt-mobile-item.open .zt-mobile-submenu {
  max-height: 600px;
}

.zt-mobile-submenu-inner {
  padding: 6px 0 12px;
}

.zt-mobile-submenu a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 28px 11px 40px;
  font-size: .82rem;
  color: rgba(255, 210, 160, 0.55);
  text-decoration: none;
  letter-spacing: .03em;
  transition: color .2s, padding-left .2s;
}
.zt-mobile-submenu a::before {
  content: '';
  width: 4px; height: 4px;
  border-radius: 50%;
  background: rgba(232, 114, 10, 0.35);
  flex-shrink: 0;
  transition: background .2s;
}
.zt-mobile-submenu a:hover {
  color: #F0A820;
  padding-left: 46px;
}
.zt-mobile-submenu a:hover::before { background: #F0A820; }

.zt-mobile-link {
  display: flex; align-items: center;
  height: 62px; padding: 0 28px;
  font-family: 'Syne', sans-serif;
  font-size: 1rem; font-weight: 700;
  color: #FFF8F2;
  text-decoration: none;
  letter-spacing: .06em;
  text-transform: uppercase;
  border-bottom: 1px solid rgba(212, 86, 26, 0.08);
  transition: background .2s, color .2s;
}
.zt-mobile-link:hover {
  background: rgba(232, 114, 10, 0.05);
  color: #F0A820;
}

.zt-mobile-cta {
  margin: 28px 28px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: linear-gradient(135deg, #C43010, #E8720A);
  border-radius: 10px;
  font-family: 'Syne', sans-serif;
  font-size: .85rem; font-weight: 700;
  color: #fff; text-decoration: none;
  letter-spacing: .06em; text-transform: uppercase;
  box-shadow: 0 8px 24px rgba(196, 48, 16, 0.35);
  transition: opacity .2s, box-shadow .2s;
}
.zt-mobile-cta:hover {
  opacity: .88;
  box-shadow: 0 12px 32px rgba(196, 48, 16, 0.5);
}

/* ── Dropdown desktop ── */
.zt-has-dropdown { position: relative; }
.zt-has-dropdown > a { display: flex; align-items: center; gap: 5px; }
.zt-has-dropdown > a svg { transition: transform .25s; opacity: .55; }
.zt-has-dropdown:hover > a svg { transform: rotate(180deg); }

.zt-has-dropdown::after {
  content: '';
  position: absolute;
  top: 100%; left: -20px; right: -20px;
  height: 12px;
  background: transparent;
}

.zt-dropdown {
  display: none;
  position: absolute;
  top: calc(100% + 1px);
  left: 50%; transform: translateX(-50%) translateY(8px);
  background: rgba(13, 8, 6, 0.96);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(212, 86, 26, 0.14);
  border-radius: 10px;
  padding: 8px;
  min-width: 240px;
  list-style: none;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.55);
  opacity: 0;
  transition: opacity .2s, transform .2s;
  pointer-events: none;
}
.zt-has-dropdown:hover .zt-dropdown {
  display: block;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}

.zt-dropdown::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #8B1A0A, #C43010, #E8720A, #F0A820, #F5C840);
  border-radius: 10px 10px 0 0;
}

.zt-dropdown li a {
  display: block;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: .83rem !important;
  color: rgba(255, 220, 180, 0.55) !important;
  text-transform: none !important;
  letter-spacing: .01em !important;
  transition: background .2s, color .2s !important;
}
.zt-dropdown li a:hover {
  background: rgba(212, 86, 26, 0.12);
  color: #F0A820 !important;
}

.logo-nav img { width: 170px; height: auto; }

@media (max-width: 768px) {
  nav { padding: 0 24px; }
  .zt-nav-links { display: none; }
  .zt-nav-hamburger { display: flex; }
}
  </style>

  <nav id="zt-navbar">
    <div class="logo-nav">
      <a href="/" class="zt-logo"><img src="/logo2.png"/></a>
    </div>
    <ul class="zt-nav-links">
      <li class="zt-has-dropdown">
        <a href="/index.html#services" data-page="services">
          Services
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <ul class="zt-dropdown">
          <li><a href="/reliability-tests">Reliability Tests</a></li>
          <li><a href="/package-qualification-testing">Package Qualification Testing</a></li>
          <li><a href="/esd-latchup-testing">ESD &amp; Latch-Up</a></li>
          <li><a href="/failure-analysis">Failure Analysis</a></li>
          <li><a href="/forensic-services">Forensic Services</a></li>
        </ul>
      </li>
      <li class="zt-has-dropdown">
        <a href="#markets" data-page="markets">
          Markets
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <ul class="zt-dropdown">
          <li><a href="/artificial-intelligence">Artificial Intelligence</a></li>
          <li><a href="/aerospace-defense">Aerospace and Defense</a></li>
          <li><a href="/automotive">Automotive</a></li>
          <li><a href="/industrial">Industrial</a></li>
          <li><a href="/medical">Medical</a></li>
          <li><a href="/transportation">Transportation</a></li>
        </ul>
      </li>
      <li><a href="/about-us"   data-page="about-us">About Us</a></li>
      <li><a href="/warpage"    data-page="warpage">Asic Warpage Analysis</a></li>
      <li><a href="/patronage"  data-page="patronage">Patronage</a></li>
      <li><a href="/contact"    data-page="contact">Contact</a></li>
    </ul>
    <button class="zt-nav-hamburger" id="zt-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <!-- ══ MOBILE MENU ══ -->
  <div class="zt-mobile-menu" id="zt-mobile-menu">

    <div class="zt-mobile-item" data-accordion>
      <div class="zt-mobile-item-header" data-accordion-toggle>
        <span>Services</span>
        <div class="zt-mobile-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
      <div class="zt-mobile-submenu">
        <div class="zt-mobile-submenu-inner">
          <a href="/reliability-tests">Reliability Tests</a>
          <a href="/package-qualification-testing">Package Qualification Testing</a>
          <a href="/esd-latchup-testing">ESD &amp; Latch-Up</a>
          <a href="/failure-analysis">Failure Analysis</a>
          <a href="/forensic-services">Forensic Services</a>
        </div>
      </div>
    </div>

    <div class="zt-mobile-item" data-accordion>
      <div class="zt-mobile-item-header" data-accordion-toggle>
        <span>Markets</span>
        <div class="zt-mobile-arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </div>
      <div class="zt-mobile-submenu">
        <div class="zt-mobile-submenu-inner">
          <a href="/artificial-intelligence">Artificial Intelligence</a>
          <a href="/aerospace-defense">Aerospace and Defense</a>
          <a href="/automotive">Automotive</a>
          <a href="/industrial">Industrial</a>
          <a href="/medical">Medical</a>
          <a href="/transportation">Transportation</a>
        </div>
      </div>
    </div>

    <a href="/about-us"  class="zt-mobile-link">About Us</a>
    <a href="/warpage"   class="zt-mobile-link">Asic Warpage</a>
    <a href="/patronage" class="zt-mobile-link">Patronage</a>
    <a href="/contact"   class="zt-mobile-cta">Contact Us →</a>

  </div>
  `;

  /* ══════════════════════════════════════
     FOOTER HTML
  ══════════════════════════════════════ */
  const FOOTER_HTML = `
  <style>
#zt-footer {
  background: #0D0806;
  border-top: 1px solid rgba(212, 86, 26, 0.12);
  position: relative; overflow: hidden;
  font-family: 'DM Sans', sans-serif;
}

.zt-footer-glow {
  position: absolute; top: -120px; left: 50%;
  transform: translateX(-50%);
  width: 700px; height: 340px;
  background: radial-gradient(ellipse,
    rgba(232, 114, 10, 0.10) 0%,
    rgba(196, 48, 16, 0.05) 45%,
    transparent 70%
  );
  pointer-events: none;
}

#zt-footer::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg,
    #8B1A0A 0%, #C43010 20%, #E8720A 40%,
    #F0A820 65%, #F5C840 85%, #FFF4DC 100%
  );
  opacity: 0.65;
}

.zt-footer-top {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: 60px; padding: 80px 80px 60px;
  border-bottom: 1px solid rgba(212, 86, 26, 0.10);
}

.zt-footer-logo {
  font-family: 'Syne', sans-serif; font-weight: 800;
  font-size: 1.4rem; color: #FFF8F2;
  text-decoration: none; display: block; margin-bottom: 18px;
}
.zt-footer-logo span {
  background: linear-gradient(90deg, #E8720A, #F5C840);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.zt-footer-tagline {
  font-size: .83rem; color: white;
  line-height: 1.75; font-weight: 300;
  margin-bottom: 28px; max-width: 240px;
}

.zt-footer-social { display: flex; gap: 10px; }
.zt-social-btn {
  width: 36px; height: 36px;
  border: 1px solid rgba(212, 86, 26, 0.15);
  border-radius: 8px; display: flex;
  align-items: center; justify-content: center;
  color: rgba(255, 200, 140, 0.35);
  transition: border-color .2s, color .2s, background .2s;
  text-decoration: none;
}
.zt-social-btn:hover {
  border-color: #F0A820; color: #F0A820;
  background: rgba(232, 114, 10, 0.12);
}
.zt-social-btn svg { width: 16px; height: 16px; }

.zt-footer-col h5 {
  font-family: 'Syne', sans-serif; font-size: .75rem; font-weight: 700;
  color: rgba(240, 168, 32, 0.40);
  text-transform: uppercase; letter-spacing: .12em; margin-bottom: 20px;
}
.zt-footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.zt-footer-col ul a {
  font-size: .85rem; color: white;
  text-decoration: none; transition: color .2s;
}
.zt-footer-col ul a:hover { color: #F0A820; }

.zt-newsletter-p {
  font-size: .83rem; color: white;
  margin-bottom: 18px; line-height: 1.65; font-weight: 300;
}
.zt-newsletter-form { display: flex; flex-direction: column; gap: 10px; }
.zt-newsletter-input {
  background: rgba(212, 86, 26, 0.05);
  border: 1px solid rgba(212, 86, 26, 0.15);
  border-radius: 8px; padding: 12px 16px;
  color: #FFF8F2; font-family: 'DM Sans', sans-serif;
  font-size: .85rem; outline: none;
  transition: border-color .2s, background .2s;
}
.zt-newsletter-input::placeholder { color: rgba(255, 200, 140, 0.25); }
.zt-newsletter-input:focus {
  border-color: #E8720A;
  background: rgba(212, 86, 26, 0.08);
}
.zt-newsletter-btn {
  background: linear-gradient(135deg, #C43010, #E8720A);
  color: #fff; border: none; border-radius: 8px;
  padding: 12px 20px; font-family: 'DM Sans', sans-serif;
  font-size: .85rem; font-weight: 600; cursor: pointer;
  box-shadow: 0 4px 18px rgba(196, 48, 16, 0.30);
  transition: opacity .2s, box-shadow .2s;
}
.zt-newsletter-btn:hover {
  opacity: .88;
  box-shadow: 0 8px 28px rgba(196, 48, 16, 0.48);
}

.zt-footer-bottom {
  padding: 28px 80px;
  display: flex; align-items: center; justify-content: space-between;
}
.zt-footer-copy {
  font-size: .75rem; color: rgba(255, 200, 140, 0.22); letter-spacing: .03em;
}
.zt-footer-copy span {
  background: linear-gradient(90deg, #E8720A, #F0A820);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ════════════════════════════════════
   RESPONSIVE FOOTER
════════════════════════════════════ */
@media (max-width: 768px) {
  .zt-footer-top {
    grid-template-columns: 1fr;
    padding: 0; gap: 0; border-bottom: none;
  }
  .zt-footer-brand-block {
    padding: 44px 24px 36px;
    border-bottom: 1px solid rgba(212, 86, 26, 0.10);
    text-align: center;
  }
  .zt-footer-logo { margin-bottom: 14px; font-size: 1.3rem; }
  .zt-footer-tagline { max-width: 100%; margin-bottom: 22px; font-size: .82rem; }
  .zt-footer-social { justify-content: center; }
  .zt-footer-col {
    border-bottom: 1px solid rgba(212, 86, 26, 0.08);
  }
  .zt-footer-col h5 {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 0; padding: 18px 24px;
    cursor: pointer; font-size: .72rem; letter-spacing: .14em;
    transition: color .2s; user-select: none;
  }
  .zt-footer-col h5::after {
    content: '';
    display: block; width: 16px; height: 16px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23F0A820' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-size: contain;
    transition: transform .3s; flex-shrink: 0; opacity: .5;
  }
  .zt-footer-col.open h5::after { transform: rotate(180deg); opacity: 1; }
  .zt-footer-col.open h5 { color: rgba(240, 168, 32, 0.80); }
  .zt-footer-col ul {
    max-height: 0; overflow: hidden;
    transition: max-height .35s cubic-bezier(.4,0,.2,1), padding .35s;
    padding: 0 24px; gap: 0;
  }
  .zt-footer-col.open ul {
    max-height: 400px; padding: 4px 24px 20px; gap: 2px;
  }
  .zt-footer-col ul a {
    display: block; padding: 9px 0; font-size: .83rem;
    color: rgba(255, 210, 160, 0.5);
    border-bottom: 1px solid rgba(212, 86, 26, 0.05);
  }
  .zt-footer-col ul li:last-child a { border-bottom: none; }
  .zt-footer-col ul a:hover { color: #F0A820; padding-left: 6px; }
  .zt-footer-newsletter-block {
    padding: 32px 24px 36px;
    border-bottom: 1px solid rgba(212, 86, 26, 0.10);
  }
  .zt-footer-col h5.newsletter-title {
    cursor: default; padding: 0 0 16px;
    justify-content: flex-start; gap: 0; margin-bottom: 0;
  }
  .zt-footer-col h5.newsletter-title::after { display: none; }
  .zt-newsletter-form { flex-direction: column; }
  .zt-newsletter-input, .zt-newsletter-btn { width: 100%; }
  .zt-footer-bottom {
    flex-direction: column; gap: 6px;
    padding: 24px; text-align: center;
  }
  .zt-footer-copy { font-size: .72rem; }
  .zt-footer-top > div:first-child { display: none; }
  .zt-footer-brand-block { display: block; }
}

@media (min-width: 769px) {
  .zt-footer-brand-block { display: none; }
  .zt-footer-top > div:first-child { display: block; }
  .zt-footer-newsletter-block { display: none; }
  .zt-footer-top > div:last-child { display: block; }
}
  </style>

  <footer id="zt-footer">
    <div class="zt-footer-glow"></div>

    <div class="zt-footer-brand-block">
      <a href="/" class="zt-footer-logo">Zac<span>Tech</span> Semi</a>
      <p class="zt-footer-tagline">Pushing the limits of semiconductor precision. Two continents. One standard of excellence.</p>
      <div class="zt-footer-social">
        <a href="#" class="zt-social-btn" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-1 3h-2.5c-.8 0-1 .3-1 1v1.5H18l-.5 2.5H14.5V18H12v-7H10v-2.5h2V7c0-2 1-3 3-3h3v2z"/></svg>
        </a>
        <a href="#" class="zt-social-btn" aria-label="X / Twitter">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="#" class="zt-social-btn" aria-label="YouTube">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
        </a>
      </div>
    </div>

    <div class="zt-footer-top">
      <div>
        <a href="/" class="zt-footer-logo">Zac<span>Tech</span> Semi</a>
        <p class="zt-footer-tagline">Pushing the limits of semiconductor precision. Two continents. One standard of excellence.</p>
        <div class="zt-footer-social">
          <a href="#" class="zt-social-btn" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-1 3h-2.5c-.8 0-1 .3-1 1v1.5H18l-.5 2.5H14.5V18H12v-7H10v-2.5h2V7c0-2 1-3 3-3h3v2z"/></svg>
          </a>
          <a href="#" class="zt-social-btn" aria-label="X / Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="zt-social-btn" aria-label="YouTube">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
          </a>
        </div>
      </div>

      <div class="zt-footer-col" id="zt-fcol-markets">
        <h5>Markets</h5>
        <ul>
          <li><a href="/artificial-intelligence">Artificial Intelligence</a></li>
          <li><a href="/aerospace-defense">Aerospace and Defense</a></li>
          <li><a href="/automotive">Automotive</a></li>
          <li><a href="/industrial">Industrial</a></li>
          <li><a href="/medical">Medical</a></li>
          <li><a href="/transportation">Transportation</a></li>
        </ul>
      </div>

      <div class="zt-footer-col" id="zt-fcol-company">
        <h5>Company</h5>
        <ul>
          <li><a href="/about-us">About</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div class="zt-footer-col">
        <h5 class="newsletter-title">Stay Updated</h5>
        <p class="zt-newsletter-p">Latest news on semiconductor testing and our capabilities.</p>
        <div class="zt-newsletter-form">
          <input class="zt-newsletter-input" type="email" placeholder="your@email.com">
          <button class="zt-newsletter-btn">Subscribe →</button>
        </div>
      </div>
    </div>

    <div class="zt-footer-newsletter-block">
      <div class="zt-footer-col">
        <h5 class="newsletter-title" style="padding:0 0 14px; cursor:default;">Stay Updated</h5>
        <p class="zt-newsletter-p">Latest news on semiconductor testing and our capabilities.</p>
        <div class="zt-newsletter-form">
          <input class="zt-newsletter-input" type="email" placeholder="your@email.com">
          <button class="zt-newsletter-btn">Subscribe →</button>
        </div>
      </div>
    </div>

    <div class="zt-footer-bottom">
      <div class="zt-footer-copy">© 2026 <span>Zac Tech Semi</span>. All rights reserved.</div>
    </div>
  </footer>
  `;

  /* ══════════════════════════════════════
     INJECT
  ══════════════════════════════════════ */
  function inject() {

    /* ── 1. Noscript SEO block (siempre primero en el <head>) ── */
    document.head.insertAdjacentHTML('beforeend', NOSCRIPT_SEO);

    /* ── 2. Navbar ── */
    const navPlaceholder = document.getElementById('zt-nav-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = NAV_HTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }

    /* ── 3. Footer ── */
    const footerPlaceholder = document.getElementById('zt-footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = FOOTER_HTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }

    initNav();
    initFooterAccordions();
  }

  /* ══════════════════════════════════════
     NAV BEHAVIOUR
  ══════════════════════════════════════ */
  function initNav() {
    const navbar     = document.getElementById('zt-navbar');
    const hamburger  = document.getElementById('zt-hamburger');
    const mobileMenu = document.getElementById('zt-mobile-menu');

    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    onScroll();

    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
      });
    }

    document.querySelectorAll('[data-accordion]').forEach(item => {
      const toggle = item.querySelector('[data-accordion-toggle]');
      if (!toggle) return;
      toggle.addEventListener('click', () => {
        document.querySelectorAll('[data-accordion].open').forEach(other => {
          if (other !== item) other.classList.remove('open');
        });
        item.classList.toggle('open');
      });
    });

    document.querySelectorAll('.zt-mobile-link, .zt-mobile-cta, .zt-mobile-submenu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger?.classList.remove('open');
        mobileMenu?.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    window.addEventListener('load', () => {
      const hero = document.getElementById('hero');
      if (hero) hero.classList.add('loaded');
    });

    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.zt-nav-links a[href]').forEach(link => {
      const linkPath = link.getAttribute('href').split('#')[0].replace(/\/$/, '') || '/';
      if (linkPath === currentPath && !link.getAttribute('href').includes('#')) {
        link.classList.add('active');
      }
    });
  }

  /* ══════════════════════════════════════
     FOOTER ACCORDIONS (móvil)
  ══════════════════════════════════════ */
  function initFooterAccordions() {
    document.querySelectorAll('.zt-footer-col h5:not(.newsletter-title)').forEach(heading => {
      heading.addEventListener('click', () => {
        const col = heading.closest('.zt-footer-col');
        if (!col) return;
        document.querySelectorAll('.zt-footer-col.open').forEach(other => {
          if (other !== col) other.classList.remove('open');
        });
        col.classList.toggle('open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();