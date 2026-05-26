import Image from 'next/image';


export default function Hero() {
  return (
    <>
      <section className="hero" id="topo">
        <div className="hero-shell">
          <nav className="pill-nav">
            <div className="nav-left">
              <a href="#sobre">Sobre</a>
              <a href="#manifesto">Manifesto</a>
              <a href="#habilidades">Habilidades</a>
            </div>
            <div className="pill-logo">
              <span className="seal" />
              Regina<span style={{ opacity: .6, fontStyle: 'normal', fontWeight: 400 }}>Moura</span>
            </div>
            <div className="nav-right">
              <a href="#galeria">Galeria</a>
              <a href="#depoimentos">Depoimentos</a>
              <a href="#contato" className="nav-cta">Contato</a>
            </div>
          </nav>

          <svg className="orn orn-sun" viewBox="0 0 100 100" aria-hidden="true">
            <g stroke="#3D1E4F" strokeWidth="1.5" strokeLinecap="round" fill="none">
              <circle cx="50" cy="50" r="14" />
              <g>
                <line x1="50" y1="10" x2="50" y2="24" /><line x1="50" y1="76" x2="50" y2="90" />
                <line x1="10" y1="50" x2="24" y2="50" /><line x1="76" y1="50" x2="90" y2="50" />
                <line x1="22" y1="22" x2="32" y2="32" /><line x1="68" y1="68" x2="78" y2="78" />
                <line x1="78" y1="22" x2="68" y2="32" /><line x1="22" y1="78" x2="32" y2="68" />
              </g>
            </g>
          </svg>

          <svg className="orn orn-scribble" viewBox="0 0 140 80" aria-hidden="true">
            <path d="M5 40 C 20 10, 40 70, 55 35 S 95 65, 110 30 S 130 50, 138 40" stroke="#C9A24B" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path d="M118 30 L138 40 L122 52" stroke="#C9A24B" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <svg className="orn orn-arrow" viewBox="0 0 130 60" aria-hidden="true">
            <path d="M5 50 Q 40 5, 75 30 T 125 18" stroke="#3D1E4F" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeDasharray="1 4" />
            <path d="M115 8 L 125 18 L 113 24" stroke="#3D1E4F" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

          <h1 className="hero-headline">
            Conectando marcas<br />
            a pessoas <span className="ital" style={{ color: 'rgb(47, 199, 8)' }}>no ponto</span>
            <span className="accent-dot" /> de venda
          </h1>

          <div className="hero-comp">
            <div className="hero-left">
              <p className="hero-lede">
                Demonstradora &amp; Impulsionadora com vasta experiência nas maiores redes do Brasil — degustação,
                atendimento e ativação de marca com calor humano e foco em resultado.
              </p>
              <div className="cta-row">
                <a href="#contato" className="btn-primary">Falar Comigo <span className="arr">→</span></a>
                <a href="#galeria" className="btn-ghost"><span className="play">▶</span> Ver Galeria</a>
              </div>
            </div>

            <div className="hero-center">
              <div className="portrait-blob">
                <div className="portrait-ring" />
                <Image src="/photos/regina-hero.jpeg" alt="Retrato profissional de Regina Moura" width={440} height={462} priority />
              </div>
              <div className="portrait-cta-row">
                <a href="#galeria" className="btn-primary">Ver Galeria <span className="arr">→</span></a>
                <a href="#habilidades" className="btn-ghost">Competências</a>
              </div>
            </div>

            <div className="hero-right">
              <div className="stars" aria-label="Avaliação">★ ★ ★ ★ ★</div>
              <div className="exp-pill">
                <div className="num">4<span className="plus">+</span></div>
                <div className="lbl">Anos de<br />Experiência</div>
              </div>
              <div className="mini-quote">
                "Quando você atende com verdade, o produto sai da gôndola sozinho."
                <span className="by">— Regina M.</span>
              </div>
            </div>
          </div>


        </div>
      </section>

      <div className="wave-divider" aria-hidden="true">
        <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,60 C1200,140 960,140 720,80 C480,20 240,20 0,80 Z" fill="#000F90" />
          <path d="M0,80 C240,20 480,20 720,80 C960,140 1200,140 1440,60 L1440,140 L0,140 Z" fill="#F7F1E8" />
          <circle cx="200" cy="55" r="3" fill="#C9A24B" opacity=".7" />
          <circle cx="1240" cy="50" r="3" fill="#C9A24B" opacity=".7" />
          <circle cx="720" cy="80" r="4" fill="#C9A24B" />
        </svg>
      </div>
    </>
  );
}
