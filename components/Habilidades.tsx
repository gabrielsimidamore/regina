'use client';
import { useRef, useState } from 'react';

const skills = [
  'Demonstração de Produtos', 'Degustação & Sampling', 'Atendimento ao Público',
  'Merchandising & Gôndola', 'Abordagem Persuasiva', 'Campanhas & Ações de PDV',
  'Comunicação Clara', 'Organização & Disciplina', 'Trabalho em Equipe', 'Adaptabilidade',
];

export default function Habilidades() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.play().then(() => {
      setPlaying(true);
    }).catch(() => {
      v.muted = true;
      v.play();
      setPlaying(true);
    });
  };

  return (
    <section id="habilidades">
      <div className="wrap">
        <div className="sec-head" data-ghost="skills">
          <div>
            <div className="sec-num">03 — Competências</div>
            <h2 className="sec-title">O que <span className="ital">faço bem</span></h2>
          </div>
          <div className="sec-kicker">Da gôndola ao consumidor</div>
        </div>

        <div className="skills-layout">
          <div className={`video-card${playing ? ' playing' : ''}`} ref={cardRef}>
            <video
              ref={videoRef}
              muted playsInline loop preload="none"
              poster="/photos/p19.jpeg"
            >
              <source src="/media/regina-video.mp4" type="video/mp4" />
            </video>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {!playing && <img className="poster" src="/photos/p19.jpeg" alt="Regina em ação no PDV" />}
            <div className="grad" />
            <div className="vc-tag"><span className="dot" /> Em ação · PDV</div>
            {!playing && (
              <button className="play-btn" onClick={handlePlay} aria-label="Assistir vídeo">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              </button>
            )}
            <div className="caption">
              "Cada cliente que para na minha bancada é uma conversa."
              <span className="sub">Regina M. · Demonstradora &amp; Impulsionadora</span>
            </div>
          </div>

          <div className="skills-col">
            <p className="skill-intro">
              Conheço o varejo alimentício <span className="em">na prática</span> — sei o ritmo do PDV em
              sábado de promoção, sei como abordar sem invadir, e sei que a venda começa muito antes
              do cliente pegar o produto.
            </p>
            <div className="skills">
              {skills.map((s, i) => (
                <div key={s} className="skill">
                  <span className="k">{String(i + 1).padStart(2, '0')}</span>
                  <span className="name">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
