const deps = [
  {
    brand: 'Nestlé', sub: 'Parceria 2022–2024',
    body: 'A Regina tem um dom especial para encantar o cliente logo nos primeiros segundos. As metas de degustação e conversão sempre batidas durante as ações dela.',
    signa: 'Supervisora de Trade', date: '2024',
  },
  {
    brand: 'Seara', sub: 'Ação Pascoa 2023',
    body: 'Profissional de altíssimo nível. Organização impecável no ponto de venda, abordagem calorosa e sempre com energia do início ao fim do turno.',
    signa: 'Promotora de Vendas', date: '2023',
  },
  {
    brand: 'Carrefour', sub: 'Merchandising 2021–2023',
    body: 'Uma das melhores demonstradoras que já tivemos em loja. Conhece o produto, conhece o cliente e sabe transformar uma prova em venda.',
    signa: 'Gerente de Loja', date: '2023',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos">
      <div className="wrap">
        <div className="sec-head" data-ghost="vozes">
          <div>
            <div className="sec-num">05 — Depoimentos</div>
            <h2 className="sec-title">O que dizem <span className="ital">sobre mim</span></h2>
          </div>
          <div className="sec-kicker">Palavras de parceiros e supervisores</div>
        </div>
        <div className="polaroid-grid">
          {deps.map((d) => (
            <div key={d.brand} className="polaroid">
              <div className="brand">
                <div className="b-text">
                  {d.brand}
                  <span className="sub">{d.sub}</span>
                </div>
              </div>
              <div className="body">&ldquo;{d.body}&rdquo;</div>
              <div className="meta">
                <span className="signa">{d.signa}</span>
                <span>{d.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
