import './footer.css';

function Footer() {
  return (
    <div className="page-section footer" id="contact">
      <div className="footer-section get-in-touch">
        <span>Let's get in touch</span>
        <span>Have some interesting projects that you'd want me to be a part of?</span>
        <span>
          Drop me a message at: <strong>design@yutikaarora.com</strong>
        </span>
      </div>
      <div className="footer-section footer-links">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
          <i className="fab fa-behance"></i>
        </a>
      </div>
      <div className="footer-section footer-credits">
        <span>Made with ❤️ by Yutika Arora</span>
      </div>
    </div>
  );
}

export default Footer;