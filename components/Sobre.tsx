import Image from 'next/image';

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="wrap">
        <div className="sec-head" data-ghost="sobre">
          <div>
            <div className="sec-num">01 — Apresentação</div>
            <h2 className="sec-title">Sobre <span className="ital">mim</span></h2>
          </div>
          <div className="sec-kicker">A profissional por trás da bancada</div>
        </div>

        <div className="about-grid">
          <div className="about-portrait">
            <Image src="/photos/regina-sobre.png" alt="Retrato de Regina Moura" width={520} height={650} />
          </div>
          <div className="about-body">
            <p className="pull">
              "Demonstradora é o rosto da marca dentro da loja. Quando você atende com verdade,
              o produto sai da gôndola sozinho."
            </p>
            <p>
              Sou <span className="hl">Demonstradora e Impulsionadora de Vendas</span> com vasta experiência nas principais redes de supermercados,
              hipermercados e atacados do Brasil. Ao longo da minha trajetória tive a oportunidade
              de representar <span className="hl">marcas renomadas</span> — atuando diretamente no ponto de venda com foco em
              degustação, atendimento ao cliente e aumento de vendas.
            </p>
            <p>
              Minha abordagem é sempre <span className="hl">calorosa, proativa e orientada a resultados</span>. Acredito que
              cada cliente que para na minha bancada é uma conversa, não um número — e é dessa conversa
              que nasce <span className="hl">a venda, a fidelidade e a recomendação</span>.
            </p>
            <div className="signature">
              <div className="sig-name">Regina Moura</div>
              <div className="sig-line">— Demonstradora &amp; Impulsionadora · Osasco, SP</div>
            </div>
            <div className="ficha">
              {[
                { k: 'Cargo', v: <>Demonstradora &amp; <span className="em">Impulsionadora</span></> },
                { k: 'Atuação', v: 'Varejo alimentício' },
                { k: 'Experiência', v: <><span className="em">4+</span> anos no PDV</> },
                { k: 'Redes atendidas', v: 'Atacadão, Carrefour, Assaí, Sam\'s Club, Pão de Açúcar, Extra, Sonda, Giga, Barbosa, São Vicente' },
                { k: 'Marcas', v: 'Nestlé · Seara · Assim' },
                { k: 'Categorias', v: 'Lácteos · Café · Confeitaria · Proteínas' },
                { k: 'Base', v: 'Osasco, SP' },
                { k: 'Status', v: <><span className="em">Disponível</span> para novas oportunidades</> },
              ].map(({ k, v }) => (
                <div key={k} className="row">
                  <span className="k">{k}</span>
                  <span className="v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
