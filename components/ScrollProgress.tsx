'use client';
import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    // Scroll progress bar + back to top
    const bar = document.getElementById('scroll-progress');
    const backTop = document.getElementById('back-top');
    const handleScroll = () => {
      if (bar) {
        const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
        bar.style.width = pct + '%';
      }
      if (backTop) backTop.classList.toggle('show', window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Reveal on scroll via IntersectionObserver
    const revealEls = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(el => obs.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      obs.disconnect();
    };
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <div id="scroll-progress" />
      <a
        className="wa-float"
        href="https://wa.me/5511979506264?text=Ol%C3%A1%20Regina%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar."
        target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5 0-.2 0-.4-.1-.5 0-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.3 3.1c.2.2 2.2 3.3 5.3 4.7 1.9.8 2.6.9 3.5.8.6-.1 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 4.9L2 22l5.2-1.4c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.6 0-3.2-.4-4.5-1.2l-.3-.2-3.4.9.9-3.3-.2-.4c-.9-1.4-1.3-3-1.3-4.7 0-4.6 3.8-8.4 8.4-8.4 4.6 0 8.4 3.8 8.4 8.4 0 4.6-3.8 8.4-8.4 8.4z" />
        </svg>
      </a>
      <button id="back-top" aria-label="Voltar ao topo" onClick={scrollTop}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </>
  );
}
