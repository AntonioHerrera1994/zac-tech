/* ─────────────────────────────────────────
   ZAC TECH SEMI — Shared Components
   Inject navbar + footer into every page
   ───────────────────────────────────────── */

(function () {

  /* ══════════════════════════════════════
     NAVBAR HTML
  ══════════════════════════════════════ */
  const NAV_HTML = `
  <style>
    nav {
      position: fixed; top:0; left:0; right:0; z-index:100;
      padding: 0 60px; height:72px;
      display: flex; align-items:center; justify-content:space-between;
      transition: background .4s, backdrop-filter .4s;
    }
    nav.scrolled {
      background: rgba(10,10,10,0.88);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(255,255,255,0.07);
    }
    .zt-logo {
      font-family:'Syne',sans-serif; font-weight:800;
      font-size:1.3rem; color:#FAFAFA;
      letter-spacing:-.02em; text-decoration:none;
    }
    .zt-logo span { color:#A07830; }
    .zt-nav-links { display:flex; gap:36px; list-style:none; }
    .zt-nav-links a {
      color:rgba(255,255,255,.7); text-decoration:none;
      font-size:.85rem; font-weight:400;
      letter-spacing:.04em; text-transform:uppercase;
      transition:color .2s;
    }
    .zt-nav-links a:hover,
    .zt-nav-links a.active { color:#A07830; }
    .zt-nav-cta {
      background:#A07830; color:#fff !important;
      padding:9px 22px; border-radius:4px;
      font-weight:500 !important;
      transition:background .2s !important, transform .2s !important;
    }
    .zt-nav-cta:hover {
      background:#FF7B3D !important;
      transform:translateY(-1px);
    }

    /* Mobile hamburger */
    .zt-nav-hamburger {
      display:none; flex-direction:column; gap:5px;
      background:none; border:none; cursor:none;
      padding:4px;
    }
    .zt-nav-hamburger span {
      display:block; width:22px; height:2px;
      background:#FAFAFA; border-radius:2px;
      transition:transform .3s, opacity .3s;
    }
    .zt-nav-hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
    .zt-nav-hamburger.open span:nth-child(2) { opacity:0; }
    .zt-nav-hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

    .zt-mobile-menu {
      display:none; position:fixed;
      top:72px; left:0; right:0; bottom:0;
      background:rgba(10,10,10,.97);
      backdrop-filter:blur(20px);
      flex-direction:column; align-items:center; justify-content:center;
      gap:32px; z-index:99;
    }
    .zt-mobile-menu.open { display:flex; }
    .zt-mobile-menu a {
      font-family:'Syne',sans-serif; font-size:2rem;
      font-weight:800; color:#FAFAFA;
      text-decoration:none; letter-spacing:-.02em;
      transition:color .2s;
    }
    .zt-mobile-menu a:hover { color:#A07830; }
    .zt-mobile-menu .zt-nav-cta {
      font-size:1rem !important;
      padding:14px 40px; border-radius:6px;
    }

    @media(max-width:768px){
      nav { padding:0 24px; }
      .zt-nav-links { display:none; }
      .zt-nav-hamburger { display:flex; }
    }

    .zt-has-dropdown { position: relative; }

.zt-has-dropdown > a {
  display: flex; align-items: center; gap: 5px;
}
.zt-has-dropdown > a svg {
  transition: transform .25s;
  opacity: .6;
}
.zt-has-dropdown:hover > a svg { transform: rotate(180deg); }

.zt-dropdown {
  display: none;
  position: absolute;
top: calc(100% + 1px);   /* reduce el gap */
  padding-top: 16px;        /* el espacio ahora está DENTRO del dropdown */
  left: 50%; transform: translateX(-50%);
  background: rgba(10,10,10,0.95);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 10px;
  padding: 8px;
  min-width: 240px;
  list-style: none;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5);
  /* animación de entrada */
  opacity: 0;
  transform: translateX(-50%) translateY(8px);
  transition: opacity .2s, transform .2s;
  pointer-events: none;
}

top: calc(100% + 4px);   /* reduce el gap */
  padding-top: 16px;        /* el espacio ahora está DENTRO del dropdown */
.zt-has-dropdown:hover .zt-dropdown {
  display: block;
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}
.zt-dropdown li a {
  display: block;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: .83rem !important;
  color: rgba(255,255,255,.6) !important;
  text-transform: none !important;
  letter-spacing: .01em !important;
  transition: background .2s, color .2s !important;
}
.zt-dropdown li a:hover {
  background: rgba(255,94,26,0.12);
  color: #A07830 !important;
}
/* línea separadora decorativa arriba del dropdown */
.zt-dropdown::before {
  content: '';
  position: absolute;
  top: -5px; left: 50%; transform: translateX(-50%);
  width: 30px; height: 2px;
  background: #A07830;
  border-radius: 2px;
}
  </style>

  <nav id="zt-navbar">
    <a href="index.html" class="zt-logo">Zac<span>Tech</span> Semi</a>
    <ul class="zt-nav-links">
      <li><a href="index.html" data-page="home">Home</a></li>
    <li class="zt-has-dropdown">
  <a href="index.html#services" data-page="services">
    Services
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M6 9l6 6 6-6"/></svg>
  </a>
  <ul class="zt-dropdown">
    <li><a href="reliability-tests.html">Reliability Tests</a></li>
    <li><a href="package.html">Package Qualification Testing</a></li>
    <li><a href="esd.html">ESD & Latch-Up</a></li>
    <li><a href="feature.html">Feature Analysis</a></li>
    <li><a href="forensic.html">Forensic Services</a></li>
  </ul>
</li>
      <li><a href="index.html#innovation" data-page="about">About</a></li>
      <li><a href="index.html#differentiators" data-page="why">Why Us</a></li>
      <li><a href="index.html#locations" data-page="locations">Locations</a></li>
      <li><a href="#cta" class="zt-nav-cta">Get a Quote</a></li>
    </ul>
    <button class="zt-nav-hamburger" id="zt-hamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </nav>

  <div class="zt-mobile-menu" id="zt-mobile-menu">
    <a href="index.html">Home</a>
    <a href="index.html#services">Services</a>
    <a href="index.html#innovation">About</a>
    <a href="index.html#differentiators">Why Us</a>
    <a href="index.html#locations">Locations</a>
    <a href="#cta" class="zt-nav-cta">Get a Quote</a>
  </div>
  `;

  /* ══════════════════════════════════════
     FOOTER HTML
  ══════════════════════════════════════ */
  const FOOTER_HTML = `
  <style>
    #zt-footer {
      background:#111111;
      border-top:1px solid rgba(255,255,255,0.07);
      position:relative; overflow:hidden;
      font-family:'DM Sans',sans-serif;
    }
    .zt-footer-glow {
      position:absolute; top:-120px; left:50%;
      transform:translateX(-50%);
      width:600px; height:300px;
      background:radial-gradient(ellipse,rgba(255,94,26,.07) 0%,transparent 70%);
      pointer-events:none;
    }
    .zt-footer-top {
      display:grid;
      grid-template-columns:1.4fr 1fr 1fr 1.2fr;
      gap:60px; padding:80px 80px 60px;
      border-bottom:1px solid rgba(255,255,255,0.07);
    }
    .zt-footer-logo {
      font-family:'Syne',sans-serif; font-weight:800;
      font-size:1.4rem; color:#FAFAFA;
      text-decoration:none; display:block; margin-bottom:18px;
    }
    .zt-footer-logo span { color:#A07830; }
    .zt-footer-tagline {
      font-size:.83rem; color:rgba(255,255,255,.4);
      line-height:1.75; font-weight:300;
      margin-bottom:28px; max-width:240px;
    }
    .zt-footer-social { display:flex; gap:10px; }
    .zt-social-btn {
      width:36px; height:36px;
      border:1px solid rgba(255,255,255,0.07);
      border-radius:8px; display:flex;
      align-items:center; justify-content:center;
      color:rgba(255,255,255,.4);
      transition:border-color .2s,color .2s,background .2s;
      text-decoration:none;
    }
    .zt-social-btn:hover {
      border-color:#A07830; color:#A07830;
      background:rgba(255,94,26,.12);
    }
    .zt-social-btn svg { width:16px; height:16px; }
    .zt-footer-col h5 {
      font-family:'Syne',sans-serif; font-size:.75rem;
      font-weight:700; color:rgba(255,255,255,.3);
      text-transform:uppercase; letter-spacing:.12em; margin-bottom:20px;
    }
    .zt-footer-col ul { list-style:none; display:flex; flex-direction:column; gap:11px; }
    .zt-footer-col ul a {
      font-size:.85rem; color:rgba(255,255,255,.5);
      text-decoration:none; transition:color .2s;
    }
    .zt-footer-col ul a:hover { color:#A07830; }
    .zt-newsletter-p {
      font-size:.83rem; color:rgba(255,255,255,.4);
      margin-bottom:18px; line-height:1.65; font-weight:300;
    }
    .zt-newsletter-form { display:flex; flex-direction:column; gap:10px; }
    .zt-newsletter-input {
      background:rgba(255,255,255,.04);
      border:1px solid rgba(255,255,255,0.07);
      border-radius:8px; padding:12px 16px;
      color:#FAFAFA; font-family:'DM Sans',sans-serif;
      font-size:.85rem; outline:none;
      transition:border-color .2s;
    }
    .zt-newsletter-input::placeholder { color:rgba(255,255,255,.25); }
    .zt-newsletter-input:focus { border-color:#A07830; }
    .zt-newsletter-btn {
      background:#A07830; color:#fff; border:none;
      border-radius:8px; padding:12px 20px;
      font-family:'DM Sans',sans-serif; font-size:.85rem;
      font-weight:600; cursor:pointer; transition:background .2s;
    }
    .zt-newsletter-btn:hover { background:#FF7B3D; }
    .zt-footer-bottom {
      padding:28px 80px;
      display:flex; align-items:center; justify-content:space-between;
    }
    .zt-footer-copy {
      font-size:.75rem; color:rgba(255,255,255,.25); letter-spacing:.03em;
    }
    .zt-footer-copy span { color:#A07830; }
    .zt-footer-links-bottom { display:flex; gap:28px; }
    .zt-footer-links-bottom a {
      font-size:.73rem; color:rgba(255,255,255,.25);
      text-decoration:none; letter-spacing:.04em;
      text-transform:uppercase; transition:color .2s;
    }
    .zt-footer-links-bottom a:hover { color:rgba(255,255,255,.55); }

    @media(max-width:768px){
      .zt-footer-top {
        grid-template-columns:1fr;
        padding:48px 24px 40px; gap:40px;
      }
      .zt-footer-bottom {
        flex-direction:column; gap:16px;
        padding:24px; text-align:center;
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
        <h5>Services</h5>
        <ul>
          <li><a href="reliability-tests.html">Reliability Tests</a></li>
          <li><a href="package.html">Package Qualification</a></li>
          <li><a href="esd.html">ESD &amp; Latch-Up</a></li>
          <li><a href="feature.html">Feature Analysis</a></li>
          <li><a href="forensic.html">Forensic Services</a></li>
        </ul>
      </div>

      <div class="zt-footer-col">
        <h5>Company</h5>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html#innovation">About Us</a></li>
          <li><a href="index.html#locations">Locations</a></li>
          <li><a href="#">Certifications</a></li>
          <li><a href="#">Careers</a></li>
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
      // If no placeholder, prepend to body
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
    const navbar = document.getElementById('zt-navbar');
    const hamburger = document.getElementById('zt-hamburger');
    const mobileMenu = document.getElementById('zt-mobile-menu');

    // Scroll → add dark background
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
    // Run once on load
    navbar.classList.toggle('scrolled', window.scrollY > 60);

    // Hamburger toggle
    if (hamburger && mobileMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        mobileMenu.classList.toggle('open');
      });
      // Close on link click
      mobileMenu.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          hamburger.classList.remove('open');
          mobileMenu.classList.remove('open');
        });
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

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }

})();