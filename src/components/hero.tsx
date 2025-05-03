import './hero.css';

function HERO() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-title">Yutika Arora</span>
        <span className="hero-subtitle">
          Consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <div className="hero-links">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <i className="fab fa-behance"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HERO;
