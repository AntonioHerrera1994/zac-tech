(function () {

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

/* ── Mobile full-screen menu ── */
.zt-mobile-menu {
  display: none; position: fixed;
  top: 72px; left: 0; right: 0; bottom: 0;
  background: rgba(13, 8, 6, 0.97);
  backdrop-filter: blur(20px);
  flex-direction: column; align-items: center; justify-content: center;
  gap: 32px; z-index: 99;
}
.zt-mobile-menu.open { display: flex; }
.zt-mobile-menu a {
  font-family: 'Syne', sans-serif; font-size: 2rem;
  font-weight: 800; color: #FFF8F2;
  text-decoration: none; letter-spacing: -.02em;
  transition: color .2s;
}
.zt-mobile-menu a:hover { color: #F0A820; }

@media (max-width: 768px) {
  nav { padding: 0 24px; }
  .zt-nav-links { display: none; }
  .zt-nav-hamburger { display: flex; }
}

/* ── Dropdown ── */
.zt-has-dropdown { position: relative; }
.zt-has-dropdown > a { display: flex; align-items: center; gap: 5px; }
.zt-has-dropdown > a svg { transition: transform .25s; opacity: .55; }
.zt-has-dropdown:hover > a svg { transform: rotate(180deg); }

/* Bridge gap so hover doesn't break */
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

/* Sunset line on top of dropdown */
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

.logo-nav img{
  width:170px;
  height:auto;
}
  </style>

  <nav id="zt-navbar">
    <div class="logo-nav">
      <a href="index.html" class="zt-logo"><img src="/logo2.png"/></a>
    </div>
    <ul class="zt-nav-links">

      <!-- Services -->
      <li class="zt-has-dropdown">
        <a href="index.html#services" data-page="services">
          Services
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <ul class="zt-dropdown">
          <li><a href="reliability-tests.html">Reliability Tests</a></li>
          <li><a href="package-qualification-testing.html">Package Qualification Testing</a></li>
          <li><a href="esd-latchup-testing.html">ESD &amp; Latch-Up</a></li>
          <li><a href="failure-analysis.html">Failure Analysis</a></li>
          <li><a href="forensic-services.html">Forensic Services</a></li>
        </ul>
      </li>

      <!-- Markets -->
      <li class="zt-has-dropdown">
        <a href="#markets" data-page="markets">
          Markets
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
        </a>
        <ul class="zt-dropdown">
          <li><a href="artificial-intelligence.html">Artificial Intelligence</a></li>
          <li><a href="aerospace-defense.html">Aerospace and Defense</a></li>
          <li><a href="automotive.html">Automotive</a></li>
          <li><a href="industrial.html">Industrial</a></li>
          <li><a href="medical.html">Medical</a></li>
          <li><a href="transportation.html">Transportation</a></li>
        </ul>
      </li>

          <!-- About -->
      <li><a href="about-us.html" data-page="about-us">About Us</a></li>

          <!-- Warpage -->
      <li><a href="warpage.html" data-page="warpage">Asic Warpage Analisis</a></li>

      <!-- Warpage -->
      <li><a href="patronage.html" data-page="patronage">Patronage</a></li>


      <!-- Contact -->
      <li><a href="contact.html" data-page="contact">Contact</a></li>

    </ul>
    <button class="zt-nav-hamburger" id="zt-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="zt-mobile-menu" id="zt-mobile-menu">
    <a href="index.html#services">Services</a>
    <a href="#markets">Markets</a>
    <a href="#about">About</a>
    <a href="contact.html">Contact</a>
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

/* Glow */
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

/* Línea sunset en la parte superior del footer */
#zt-footer::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg,
    #8B1A0A 0%, #C43010 20%, #E8720A 40%,
    #F0A820 65%, #F5C840 85%, #FFF4DC 100%
  );
  opacity: 0.65;
}

/* ── Top grid ── */
.zt-footer-top {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.2fr;
  gap: 60px; padding: 80px 80px 60px;
  border-bottom: 1px solid rgba(212, 86, 26, 0.10);
}

/* Logo */
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

/* Tagline */
.zt-footer-tagline {
  font-size: .83rem; color: white;
  line-height: 1.75; font-weight: 300;
  margin-bottom: 28px; max-width: 240px;
}

/* Social icons */
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
  border-color: #F0A820;
  color: #F0A820;
  background: rgba(232, 114, 10, 0.12);
}
.zt-social-btn svg { width: 16px; height: 16px; }

/* Column headings */
.zt-footer-col h5 {
  font-family: 'Syne', sans-serif; font-size: .75rem;
  font-weight: 700;
  color: rgba(240, 168, 32, 0.40);
  text-transform: uppercase; letter-spacing: .12em; margin-bottom: 20px;
}

/* Column links */
.zt-footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.zt-footer-col ul a {
  font-size: .85rem; color: white;
  text-decoration: none; transition: color .2s;
}
.zt-footer-col ul a:hover { color: #F0A820; }

/* Newsletter */
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
  color: #fff; border: none;
  border-radius: 8px; padding: 12px 20px;
  font-family: 'DM Sans', sans-serif; font-size: .85rem;
  font-weight: 600; cursor: pointer;
  box-shadow: 0 4px 18px rgba(196, 48, 16, 0.30);
  transition: opacity .2s, box-shadow .2s;
}
.zt-newsletter-btn:hover {
  opacity: .88;
  box-shadow: 0 8px 28px rgba(196, 48, 16, 0.48);
}

/* ── Bottom bar ── */
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

.zt-footer-links-bottom { display: flex; gap: 28px; }
.zt-footer-links-bottom a {
  font-size: .73rem; color: rgba(255, 200, 140, 0.22);
  text-decoration: none; letter-spacing: .04em;
  text-transform: uppercase; transition: color .2s;
}
.zt-footer-links-bottom a:hover { color: rgba(240, 168, 32, 0.70); }

/* ── Responsive ── */
@media (max-width: 768px) {
  .zt-footer-top {
    grid-template-columns: 1fr;
    padding: 48px 24px 40px; gap: 40px;
  }
  .zt-footer-bottom {
    flex-direction: column; gap: 16px;
    padding: 24px; text-align: center;
  }
}
  </style>

  <footer id="zt-footer">
    <div class="zt-footer-glow"></div>
    <div class="zt-footer-top">
      <div>
        <a href="index.html" class="zt-footer-logo">Zac<span>Tech</span> Semi</a>
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

      <div class="zt-footer-col">
        <h5>Markets</h5>
        <ul>
          <li><a href="artificial-intelligence.html">Artificial Intelligence</a></li>
          <li><a href="aerospace-defense.html">Aerospace and Defense</a></li>
          <li><a href="automotive.html">Automotive</a></li>
          <li><a href="industrial.html">Industrial</a></li>
          <li><a href="medical.html">Medical</a></li>
          <li><a href="transportation.html">Transportation</a></li>
        </ul>
      </div>

      <div class="zt-footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="group-services.html">Tech MeoL Group Services</a></li>
          <li><a href="policy.html">Policy</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>

      <div class="zt-footer-col">
        <h5>Stay Updated</h5>
        <p class="zt-newsletter-p">Latest news on semiconductor testing and our capabilities.</p>
        <div class="zt-newsletter-form">
          <input class="zt-newsletter-input" type="email" placeholder="your@email.com">
          <button class="zt-newsletter-btn">Subscribe →</button>
        </div>
      </div>
    </div>

    <div class="zt-footer-bottom">
      <div class="zt-footer-copy">© 2025 <span>Zac Tech Semi</span>. All rights reserved.</div>
      <div class="zt-footer-links-bottom">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Quality Standards</a>
      </div>
    </div>
  </footer>
  `;

  /* ══════════════════════════════════════
     INJECT — runs as soon as DOM is ready
  ══════════════════════════════════════ */
  function inject() {
    // ── Navbar ──
    const navPlaceholder = document.getElementById('zt-nav-placeholder');
    if (navPlaceholder) {
      navPlaceholder.outerHTML = NAV_HTML;
    } else {
      document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    }

    // ── Footer ──
    const footerPlaceholder = document.getElementById('zt-footer-placeholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = FOOTER_HTML;
    } else {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }

    initNav();
  }

  /* ══════════════════════════════════════
     NAV BEHAVIOUR
  ══════════════════════════════════════ */
  function initNav() {
    const navbar    = document.getElementById('zt-navbar');
    const hamburger = document.getElementById('zt-hamburger');
    const mobileMenu = document.getElementById('zt-mobile-menu');

    // Scroll → add dark background
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    // Hamburger toggle
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          hamburger.classList.remove('open');
          mobileMenu.classList.remove('open');
        });
      });

      window.addEventListener('scroll', () => {
        const nav = document.getElementById('zt-navbar');
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
      });
      window.addEventListener('load', () => {
        const hero = document.getElementById('hero');
        if (hero) hero.classList.add('loaded');
      });
    }

    // Active link highlight based on current filename
    const currentFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.zt-nav-links a, .zt-mobile-menu a').forEach(link => {
      const href = link.getAttribute('href') || '';
      const linkFile = href.split('/').pop().split('#')[0];
      if (linkFile === currentFile && !href.includes('#')) {
        link.classList.add('active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();