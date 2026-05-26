'use client';

const BRANDS = [
  { src: '/logos/carrefour.png', alt: 'Carrefour' },
  { src: '/logos/nestle.png', alt: 'Nestlé' },
  { src: '/logos/atacadao.png', alt: 'Atacadão' },
  { src: '/logos/seara.png', alt: 'Seara' },
  { src: '/logos/assai.jpeg', alt: 'Assaí Atacadista' },
  { src: '/logos/paodeacucar.png', alt: 'Pão de Açúcar' },
  { src: '/logos/samsclub.png', alt: "Sam's Club" },
  { src: '/logos/extra.png', alt: 'Extra' },
  { src: '/logos/sonda.jpg', alt: 'Sonda' },
  { src: '/logos/giga.jpg', alt: 'Giga Atacado' },
  { src: '/logos/barbosa.png', alt: 'Barbosa' },
  { src: '/logos/saovicente.jpg', alt: 'São Vicente' },
];

export function BrandMarquee() {
  return (
    <section className="brand-strip" aria-label="Marcas e redes onde Regina já atuou">
      <div className="label">Marcas &amp; Redes onde já atuei</div>
      <div className="marquee">
        {[...BRANDS, ...BRANDS].map((b, i) => (
          <div key={i} className="brand-item" title={b.alt} aria-hidden={i >= BRANDS.length ? 'true' : undefined}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={b.src} alt={i < BRANDS.length ? b.alt : ''} />
          </div>
        ))}
      </div>
    </section>
  );
}

export function Ticker() {
  const items = ['Degustação', 'Atendimento ao Público', 'Ativação de Marca', '· Conectando marcas a pessoas no PDV ·', 'Abordagem Persuasiva', 'Campanhas Promocionais', 'Merchandising', '· Calor humano com método ·'];
  const stars = new Set([3, 7]);
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((item, i) => (
          <span key={i}>
            {stars.has(i % items.length) ? <span className="star">{item}</span> : item}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  );
}
