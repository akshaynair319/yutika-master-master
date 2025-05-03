import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section get-in-touch">
        <h3>Let's get in touch</h3>
        <p>Have some interesting projects that you'd want me to be a part of?</p>
        <p>
          Drop me a message at: <strong>design@yutikaarora.com</strong>
        </p>
      </div>
      <div className="footer-section footer-links">
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
      <div className="footer-section footer-credits">
        <p>Made with ❤️ by Yutika Arora</p>
      </div>
    </footer>
  );
}

export default Footer;