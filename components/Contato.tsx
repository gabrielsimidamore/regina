export default function Contato() {
  return (
    <section id="contato">
      <div className="wrap">
        <div className="sec-head" data-ghost="contato">
          <div>
            <div className="sec-num">06 — Contato</div>
            <h2 className="sec-title">Vamos <span className="ital">conversar</span></h2>
          </div>
          <div className="sec-kicker">Disponível para novas oportunidades</div>
        </div>

        <div className="receipt-wrap">
          <div className="receipt-intro">
            <div className="label">Cupão de contratação</div>
            <h3>Pronta para <span className="ital">representar sua marca</span> no PDV.</h3>
            <p>
              Demonstradora &amp; Impulsionadora disponível para ações em supermercados, hipermercados e atacados.
              Destaque o seu produto na gôndola e na conversa com o cliente.
            </p>
            <div className="stamp">Aprovado · Válido para 2026</div>
          </div>

          <div className="receipt">
            <div className="r-head">
              <div className="biz">Regina Moura</div>
              <div className="biz-sub">Demonstradora &amp; Impulsionadora de Vendas</div>
              <div className="doc"><span>Cupão nº 2026 / 001</span><span>via portfolio</span></div>
            </div>
            {[
              { lbl: 'Nome', val: 'Regina Moura', qty: 'x1' },
              { lbl: 'Cargo', val: 'Demonstradora & Impulsionadora', qty: '·' },
              { lbl: 'Cidade', val: 'Osasco, SP', qty: '·' },
              { lbl: 'Telefone', val: '(11) 97950-6264', qty: '·' },
              { lbl: 'Experiência', val: '4+ anos no PDV', qty: 'x4' },
            ].map(({ lbl, val, qty }) => (
              <div key={lbl} className="r-line">
                <div className="item"><span className="lbl">{lbl}</span><span className="val">{val}</span></div>
                <span className="qty">{qty}</span>
              </div>
            ))}
            <div className="r-total">
              <span className="l">Total / Valor agregado</span>
              <span className="v">Inestimável</span>
            </div>
            <div className="r-actions">
              <a
                className="r-btn wa"
                href="https://wa.me/5511979506264?text=Ol%C3%A1%20Regina%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
                target="_blank" rel="noopener noreferrer"
              >
                <span>Chamar no WhatsApp · (11) 97950-6264</span>
                <span className="arr">→</span>
              </a>
            </div>
            <div className="r-barcode">
              <div className="bars" />
              <div className="code">REGINA · 2026 · PDV · BR</div>
            </div>
            <div className="r-social">
              {[
                { href: 'https://wa.me/5511979506264', label: 'WhatsApp', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.3 5.3 4.7 1.9.8 2.6.9 3.5.8.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.4.9.9-3.3-.2-.4c-.9-1.4-1.3-3-1.3-4.7 0-4.6 3.8-8.4 8.4-8.4 4.6 0 8.4 3.8 8.4 8.4 0 4.6-3.8 8.4-8.4 8.4z" /></svg> },
                { href: '#', label: 'Instagram', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg> },
                { href: '#', label: 'LinkedIn', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zM8.3 18.3H5.7V9.7h2.6v8.6zM7 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm11.3 9.8h-2.6v-4.2c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2v4.3h-2.6V9.7h2.5v1.2h.04c.35-.66 1.2-1.4 2.5-1.4 2.7 0 3.2 1.8 3.2 4.1v4.7z" /></svg> },
              ].map(({ href, label, icon }) => (
                <a key={label} href={href} target={href !== '#' ? '_blank' : undefined} rel="noopener noreferrer" title={label} aria-label={label}>{icon}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
