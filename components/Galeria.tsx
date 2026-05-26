'use client';
import { useState, useEffect, useRef } from 'react';

const PHOTOS = [
  { src: '/photos/p01.jpeg', cat: 'demonstracao', cap: 'Demonstração · Nestlé Ninho' },
  { src: '/photos/p02.jpeg', cat: 'promocao', cap: 'Ação Promocional · Giga Atacado' },
  { src: '/photos/p11.jpeg', cat: 'atendimento', cap: 'Atendimento · Nestlé Prêmios' },
  { src: '/photos/p17.jpeg', cat: 'promocao', cap: 'Show de Ofertas · Carrefour' },
  { src: '/photos/p18.jpeg', cat: 'atendimento', cap: 'Atendimento ao cliente · Carrefour' },
  { src: '/photos/p19.jpeg', cat: 'demonstracao', cap: 'Degustação · Nescafé / Nescau' },
  { src: '/photos/p25.jpeg', cat: 'atendimento', cap: 'Show de Ofertas · Carrefour' },
  { src: '/photos/p35.jpeg', cat: 'atendimento', cap: 'Atendimento · Carrefour' },
  { src: '/photos/p40.jpeg', cat: 'atendimento', cap: 'Cliente feliz · Nescau' },
  { src: '/photos/p43.jpeg', cat: 'atendimento', cap: 'Ação Seara · Atacadão' },
  { src: '/photos/p05.jpeg', cat: 'atendimento', cap: 'Cliente · Nestlé Alpino' },
  { src: '/photos/p15.jpeg', cat: 'promocao', cap: 'Equipe Nestlé Garoto · Páscoa' },
  { src: '/photos/p06.jpeg', cat: 'demonstracao', cap: 'Degustação · Nescafé' },
  { src: '/photos/p07.jpeg', cat: 'ambiente', cap: 'PDV · Hipermercado' },
  { src: '/photos/p08.jpeg', cat: 'ambiente', cap: 'Gôndola organizada' },
  { src: '/photos/p09.jpeg', cat: 'ambiente', cap: 'Exposição de produtos' },
  { src: '/photos/p10.jpeg', cat: 'atendimento', cap: 'Cliente · Nestlé Prêmios' },
  { src: '/photos/p12.jpeg', cat: 'promocao', cap: 'Stand Promocional' },
  { src: '/photos/p13.jpeg', cat: 'demonstracao', cap: 'Demonstração ativa' },
  { src: '/photos/p14.jpeg', cat: 'demonstracao', cap: 'Sampling · PDV' },
  { src: '/photos/p16.jpeg', cat: 'atendimento', cap: 'Abordagem ao consumidor' },
  { src: '/photos/p21.jpeg', cat: 'ambiente', cap: 'Bastidores do PDV' },
  { src: '/photos/p22.jpeg', cat: 'promocao', cap: 'Campanha Nestlé' },
  { src: '/photos/p23.jpeg', cat: 'demonstracao', cap: 'Demonstração de produto' },
  { src: '/photos/p24.jpeg', cat: 'atendimento', cap: 'Atendimento personalizado' },
  { src: '/photos/p26.jpeg', cat: 'atendimento', cap: 'Cliente satisfeito' },
  { src: '/photos/p27.jpeg', cat: 'promocao', cap: 'Promoção em PDV' },
  { src: '/photos/p28.jpeg', cat: 'demonstracao', cap: 'Degustação dirigida' },
  { src: '/photos/p29.jpeg', cat: 'ambiente', cap: 'Ambiente de trabalho' },
  { src: '/photos/p31.jpeg', cat: 'atendimento', cap: 'Conversa com cliente' },
  { src: '/photos/p32.jpeg', cat: 'promocao', cap: 'Stand de marca' },
  { src: '/photos/p33.jpeg', cat: 'demonstracao', cap: 'Demonstração em loja' },
  { src: '/photos/p34.jpeg', cat: 'atendimento', cap: 'Atendimento caloroso' },
  { src: '/photos/p36.jpeg', cat: 'promocao', cap: 'Ação promocional' },
  { src: '/photos/p37.jpeg', cat: 'ambiente', cap: 'Equipe no PDV' },
  { src: '/photos/p39.jpeg', cat: 'atendimento', cap: 'Cliente recorrente' },
  { src: '/photos/p41.jpeg', cat: 'promocao', cap: 'Campanha em curso' },
  { src: '/photos/p42.jpeg', cat: 'atendimento', cap: 'Relacionamento com cliente' },
  { src: '/photos/p20.jpeg', cat: 'atendimento', cap: 'Clientes · Brinde Nestlé' },
  { src: '/photos/p03.jpeg', cat: 'ambiente', cap: 'Ambiente · Supermercado' },
  { src: '/photos/p04.jpeg', cat: 'ambiente', cap: 'PDV · Loja parceira' },
];

const W = ['tall', 'sq', 'wide', 'sq', 'tall', 'wide', 'sq', 'tall'] as const;
const rows = [PHOTOS.filter((_, i) => i % 3 === 0), PHOTOS.filter((_, i) => i % 3 === 1), PHOTOS.filter((_, i) => i % 3 === 2)];

function PhotoRow({ photos, cls }: { photos: typeof PHOTOS; cls: string }) {
  return (
    <div className={`photo-row ${cls}`}>
      {[...photos, ...photos].map((p, i) => (
        <div key={i} className={`photo-card ${W[i % W.length]}`} aria-hidden={i >= photos.length ? 'true' : undefined}>
          {i < photos.length && <div className="num">{String(PHOTOS.indexOf(p) + 1).padStart(2, '0')}</div>}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img loading="lazy" src={p.src} alt={i < photos.length ? p.cap : ''} />
          <div className="cap">{p.cap}</div>
        </div>
      ))}
    </div>
  );
}

export default function Galeria() {
  const [lbIdx, setLbIdx] = useState<number | null>(null);

  const open = (i: number) => { setLbIdx(i); document.body.style.overflow = 'hidden'; };
  const close = () => { setLbIdx(null); document.body.style.overflow = ''; };
  const next = () => setLbIdx(i => i === null ? 0 : (i + 1) % PHOTOS.length);
  const prev = () => setLbIdx(i => i === null ? 0 : (i - 1 + PHOTOS.length) % PHOTOS.length);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lbIdx === null) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lbIdx]);

  // Attach click handlers after mount
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLDivElement>('.photo-card:not([aria-hidden])');
    const handlers: Array<() => void> = [];
    cards.forEach((card, i) => {
      const h = () => open(i);
      handlers.push(h);
      card.addEventListener('click', h);
    });
    return () => {
      cards.forEach((card, i) => card.removeEventListener('click', handlers[i]));
    };
  }, []);

  return (
    <>
      <section id="galeria">
        <div className="wrap">
          <div className="sec-head" data-ghost="ação">
            <div>
              <div className="sec-num">04 — Galeria</div>
              <h2 className="sec-title">Em <span className="ital">ação</span></h2>
            </div>
            <div className="sec-kicker">Clique para ampliar · ← → para navegar</div>
          </div>
          <div className="gallery-meta">
            <div><span>{PHOTOS.length}</span> fotos · marquees animados em ritmos diferentes</div>
            <div>Passe o mouse para pausar</div>
          </div>
        </div>
        <div className="photo-marquee-wrap">
          <PhotoRow photos={rows[0]} cls="r1" />
          <PhotoRow photos={rows[1]} cls="r2" />
          <PhotoRow photos={rows[2]} cls="r3" />
        </div>
      </section>

      {lbIdx !== null && (
        <div className="lb on" onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
          <button className="lb-close" onClick={close} aria-label="Fechar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M18 6L6 18M6 6l12 12" /></svg>
          </button>
          <button className="lb-btn lb-prev" onClick={prev} aria-label="Anterior">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="lb-img" src={PHOTOS[lbIdx].src} alt={PHOTOS[lbIdx].cap} />
          <button className="lb-btn lb-next" onClick={next} aria-label="Próxima">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 6l6 6-6 6" /></svg>
          </button>
          <div className="lb-cap">
            <span className="cur">{String(lbIdx + 1).padStart(2, '0')} / {String(PHOTOS.length).padStart(2, '0')}</span>
            {PHOTOS[lbIdx].cap}
          </div>
        </div>
      )}
    </>
  );
}
