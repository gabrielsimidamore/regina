const principles = [
  {
    num: 'I', tag: 'Princípio um',
    title: <>O cliente <span className="ital">não é um número.</span> É uma conversa.</>,
    body: 'Cada pessoa que para na minha bancada merece tempo, escuta e uma recomendação honesta. É da conversa que nasce a venda — e também a fidelidade. Pressão nunca vendeu nada que se sustente.',
  },
  {
    num: 'II', tag: 'Princípio dois',
    title: <>A gôndola fala <span className="ital">antes</span> de mim.</>,
    body: 'Produto bem exposto, etiqueta no lugar, embalagem na frente. Quando o merchandising está no ponto, meu trabalho de abordagem fica mais leve — e o cliente já chega meio convencido.',
  },
  {
    num: 'III', tag: 'Princípio três',
    title: <>Represento a marca <span className="ital">como se fosse minha.</span></>,
    body: 'Quando visto o uniforme de uma marca, eu sou aquela marca para quem chega na loja. Postura, informação correta, energia e sorriso fazem parte da entrega. Sem isso, nenhuma promoção salva o dia.',
  },
  {
    num: 'IV', tag: 'Princípio quatro',
    title: <>Disciplina <span className="ital">vence inspiração</span> no varejo.</>,
    body: 'Chego no horário, monto a bancada do mesmo jeito todo dia, mantenho a degustação servida e impecável da abertura ao fechamento. O detalhe é onde a meta se ganha — e onde marcas se constroem.',
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto">
      <div className="wrap">
        <div className="sec-head" data-ghost="credo">
          <div>
            <div className="sec-num">02 — Manifesto</div>
            <h2 className="sec-title">Como eu <span className="ital">trabalho</span></h2>
          </div>
          <div className="sec-kicker">Quatro princípios não-negociáveis</div>
        </div>
        <div className="manifesto-grid">
          {principles.map((p) => (
            <div key={p.num} className="principle">
              <div className="pnum">{p.num}</div>
              <div className="ptag">{p.tag}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
