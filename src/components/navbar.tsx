import './navbar.css';

function Navbar({ isVisible }: { isVisible: boolean }) {
  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''}`}>
      <div className="navbar-content">
        <h1>Yutika Arora</h1>
        <div className="navbar-links">
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
    </nav>
  );
}

export default Navbar;