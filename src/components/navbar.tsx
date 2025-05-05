import './navbar.css';

function Navbar({ isVisible }: { isVisible: boolean }) {
  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
      <div className="navbar-content">
        <span className={`navbar-title ${isVisible ? 'visible' : ''}`}>Yutika Arora</span>
        <div className="navbar-links">
          <a href="#work" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            Work
          </a>
          <span>/</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            About
          </a>
          <span>/</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            Contact
          </a>
          <span>/</span>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <span>/</span>
          <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
            <i className="fab fa-behance"></i>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;