'use client';
import { useEffect, useRef } from 'react';

const STATS = [
  { n: '4', unit: 'anos', l: 'de experiência no PDV' },
  { n: '∞', unit: '',    l: 'clientes satisfeitos' },
  { n: '30+', unit: 'lojas', l: 'atendidas no Brasil' },
  { n: '3+', unit: 'marcas', l: 'líderes representadas' },
];

function dripPath(cx: number, w: number, h: number) {
  return `M${cx-w},0 C${cx-w},${h*.28} ${cx-w*1.9},${h*.68} ${cx},${h} C${cx+w*1.9},${h*.68} ${cx+w},${h*.28} ${cx+w},0 Z`;
}

const DRIPS = [
  { cx:90,  w:14, h:115, delay:.12 },
  { cx:220, w:22, h:158, delay:0   },
  { cx:360, w:11, h:88,  delay:.28 },
  { cx:490, w:27, h:168, delay:.06 },
  { cx:630, w:17, h:128, delay:.20 },
  { cx:760, w:13, h:96,  delay:.35 },
  { cx:870, w:21, h:145, delay:.08 },
  { cx:970, w:15, h:108, delay:.18 },
];

export default function ChocoBar() {
  const dripsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dripsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add('dripping'); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="choco-wrapper reveal">

      {/* ── THE BAR ── */}
      <div className="choco-bar">

        {/* Foil label strip */}
        <div className="choco-foil">
          <span className="foil-brand">Regina Moura</span>
          <span className="foil-sub">Portfólio Profissional · 2026</span>
        </div>

        {/* Chocolate squares grid */}
        <div className="choco-grid">
          {STATS.map(({ n, unit, l }) => (
            <div key={l} className="choco-piece">
              {/* per-square surface highlight */}
              <div className="sq-shine" />
              <div className="choco-num">{n}</div>
              {unit && <div className="choco-unit">{unit}</div>}
              <div className="choco-lbl">{l}</div>
            </div>
          ))}
        </div>

        {/* Brand emboss text on chocolate surface */}
        <div className="choco-emboss" aria-hidden="true">R · M</div>
      </div>

      {/* ── BITE ── positioned at top-right corner */}
      <div className="choco-bite" aria-hidden="true">
        <div className="bite-inner" />
      </div>
      {/* Crumbs near bite */}
      <div className="bite-crumbs" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      {/* ── DRIPS ── */}
      <div className="choco-drips-wrap" ref={dripsRef} aria-hidden="true">
        <svg
          viewBox="0 0 1060 175"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="drips-svg"
        >
          {/* base strip connecting bar to drips */}
          <rect x="0" y="0" width="1060" height="6" fill="#3E1A0C"/>

          {DRIPS.map((d, i) => (
            <path
              key={i}
              d={dripPath(d.cx, d.w, d.h)}
              fill="#3E1A0C"
              className="drip"
              style={{ '--dl': `${d.delay}s` } as React.CSSProperties}
            />
          ))}

          {/* melted pool at bottom */}
          <ellipse cx="530" cy="175" rx="420" ry="14" fill="#3E1A0C" className="drip-pool" />
        </svg>
      </div>

    </div>
  );
}
