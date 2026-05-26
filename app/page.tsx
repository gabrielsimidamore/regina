import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import { BrandMarquee, Ticker } from '@/components/BrandMarquee';
import Sobre from '@/components/Sobre';
import Manifesto from '@/components/Manifesto';
import Habilidades from '@/components/Habilidades';
import Galeria from '@/components/Galeria';
import Depoimentos from '@/components/Depoimentos';
import Contato from '@/components/Contato';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <BrandMarquee />
      <Sobre />
      <Ticker />
      <Manifesto />
      <Habilidades />
      <Galeria />
      <Depoimentos />
      <Contato />
      <footer>
        <div className="foot-inner">
          <div>© 2026 · <span className="gold">Regina Moura</span> · Demonstradora &amp; Impulsionadora</div>
          <div>Portfólio Profissional · Osasco/SP · Brasil</div>
        </div>
      </footer>
    </>
  );
}
