'use client';
import { useEffect, useRef } from 'react';

const STATS = [
  { n: '4',   unit: 'anos',   l: 'de experiência no PDV' },
  { n: '∞',   unit: '',       l: 'clientes satisfeitos'  },
  { n: '30+', unit: 'lojas',  l: 'atendidas no Brasil'   },
  { n: '3+',  unit: 'marcas', l: 'líderes representadas' },
];

// Realistic drip: narrow neck → wider rounded body → fully rounded tip
function drip(cx: number, w: number, h: number): string {
  const nw = w * 0.65;
  const bw = w * 1.25;
  return (
    `M${cx - nw},2 ` +
    `C${cx - bw * 1.35},${h * 0.22} ${cx - bw * 1.1},${h * 0.58} ${cx},${h} ` +
    `C${cx + bw * 1.1},${h * 0.58} ${cx + bw * 1.35},${h * 0.22} ${cx + nw},2 Z`
  );
}
// Left-side glossy highlight inside drip
function dripGlow(cx: number, w: number, h: number): string {
  const bw = w * 0.95;
  return (
    `M${cx - bw * 0.55},4 ` +
    `C${cx - bw * 0.8},${h * 0.25} ${cx - bw * 0.7},${h * 0.52} ${cx - bw * 0.1},${h * 0.68} ` +
    `C${cx - bw * 0.35},${h * 0.5} ${cx - bw * 0.3},${h * 0.22} ${cx - bw * 0.1},4 Z`
  );
}

const DRIPS = [
  { cx: 80,  w: 18, h: 130 }, { cx: 185, w: 26, h: 168 },
  { cx: 295, w: 14, h: 98  }, { cx: 400, w: 30, h: 178 },
  { cx: 510, w: 20, h: 148 }, { cx: 610, w: 13, h: 90  },
  { cx: 715, w: 24, h: 162 }, { cx: 820, w: 17, h: 120 },
  { cx: 920, w: 28, h: 172 }, { cx: 1010,w: 15, h: 105 },
];
const DELAYS = [.12, 0, .28, .04, .18, .32, .08, .22, .06, .24];

export default function ChocoBar() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('dripping'); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="choco-wrapper reveal">

      {/* ─── BARRA ─── */}
      <div className="choco-bar">

        {/* Overlay para legibilidade */}
        <div className="choco-overlay" aria-hidden="true" />

        {/* Foil embalagem */}
        <div className="choco-foil">
          <span className="foil-brand">Regina Moura</span>
          <span className="foil-tagline">Demonstradora &amp; Impulsionadora · 2026</span>
        </div>

        {/* Grade de quadradinhos 3D */}
        <div className="choco-grid">
          {STATS.map(({ n, unit, l }) => (
            <div key={l} className="choco-piece">
              <div className="choco-num">{n}</div>
              {unit && <div className="choco-unit">{unit}</div>}
              <div className="choco-lbl">{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MORDIDA canto superior direito ─── */}
      <div className="choco-bite" aria-hidden="true">
        <div className="bite-ring" />
      </div>
      <div className="bite-crumbs" aria-hidden="true">
        <i /><i /><i /><i /><i />
      </div>

      {/* ─── GOTAS ─── */}
      <div className="choco-drips-wrap" ref={wrapRef} aria-hidden="true">
        <svg viewBox="0 0 1100 185" preserveAspectRatio="none" className="drips-svg">
          <defs>
            {/* Gradient for 3D glossy drip */}
            <linearGradient id="dg" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#3A1005"/>
              <stop offset="25%"  stopColor="#7B3616"/>
              <stop offset="55%"  stopColor="#6B2E10"/>
              <stop offset="100%" stopColor="#2E0C04"/>
            </linearGradient>
          </defs>

          {/* Base strip at top */}
          <rect x="0" y="0" width="1100" height="8" fill="#3E1A0C"/>

          {DRIPS.map((d, i) => (
            <g key={i} className="drip-g"
               style={{ '--dl': `${DELAYS[i]}s` } as React.CSSProperties}>
              {/* Main drip shape */}
              <path d={drip(d.cx, d.w, d.h)}  fill="url(#dg)"/>
              {/* Glossy highlight */}
              <path d={dripGlow(d.cx, d.w, d.h)} fill="rgba(180,90,40,0.28)"/>
            </g>
          ))}

          {/* Poça derretida */}
          <ellipse cx="550" cy="183" rx="440" ry="13"
                   fill="#3E1A0C" className="drip-pool"/>
        </svg>
      </div>

    </div>
  );
}
