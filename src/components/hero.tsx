import { useEffect, useRef, useState } from 'react';
import './hero.css';

function HERO() {
  // Initialize darkMode based on the user's system preference
  const [darkMode, setDarkMode] = useState(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const [charmanders, setCharmanders] = useState(
    Array.from({ length: 5 }, () => ({
      x: Math.random() * window.innerWidth, // Random initial x position
      y: Math.random() * window.innerHeight, // Random initial y position
      dx: (Math.random() - 0.5) * 100, // Random velocity in x direction
      dy: (Math.random() - 0.5) * 100, // Random velocity in y direction
      size: Math.random() * 4 + 1, // Random size between 1 and 5
    }))
  );

  useEffect(() => {
    const updateCharmanders = () => {
      setCharmanders((prevCharmanders) =>
        prevCharmanders.map((charmander) => {
          let { x, y, dx, dy, size } = charmander;

          // Update position
          x += dx;
          y += dy;

          let boundaryHit = false;
          // Bounce off walls
          if (x <= 0 || x + size >= window.innerWidth) {
            dx *= -1
            boundaryHit = true;
          };
          if (y <= 0 || y + size >= window.innerHeight) {
            dy *= -1
            boundaryHit = true;
          };

          return { x, y, dx, dy, size: boundaryHit ? Math.random() * 4 + 1 : size };
        })
      );
    };

    let animationFrameId: number;

    const animate = () => {
      updateCharmanders();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate(); // Start the animation

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, []);
 


  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles with random speeds
    const particles: { x: number; y: number; dx: number; dy: number; size: number }[] = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 4, // Random speed in x-direction
        dy: (Math.random() - 0.5) * 4, // Random speed in y-direction
        size: Math.random() * 3 + 1, // Random size between 1 and 4
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Bounce off the edges
        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1;

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <span className="hero-title" onClick={() => setDarkMode(!darkMode)}>Yutika Arora</span>
        <span className="hero-subtitle">
        Product Designer @ Goldman Sachs💻| B.Des. in Communication Design, NIFT (2018-2022)📚 |
        Previously an intern @ Atom, Delhi Govt.
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

      <svg className="hero-animation" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        {charmanders.map((charmander, index) => (
          <g key={index} transform={`translate(${charmander.x}, ${charmander.y})`}>
            <svg width={`${charmander.size}%`} height={`${charmander.size}%`} viewBox="0 0 1050 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="150" y="50" width="50" height="50" fill="black"/>
            <rect x="150" y="100" width="50" height="50" fill="#D3140A"/>
            <rect x="100" y="150" width="50" height="50" fill="#D3140A"/>
            <rect x="150" y="150" width="50" height="50" fill="#D3140A"/>
            <rect x="150" y="200" width="50" height="50" fill="#D3140A"/>
            <rect x="200" y="200" width="50" height="50" fill="#D3140A"/>
            <rect x="100" y="200" width="50" height="50" fill="#D3140A"/>
            <rect x="50" y="200" width="50" height="50" fill="#D3140A"/>
            <rect x="50" y="250" width="50" height="50" fill="#D3140A"/>
            <rect x="50" y="300" width="50" height="50" fill="#D3140A"/>
            <rect x="150" y="250" width="50" height="50" fill="#D3140A"/>
            <rect x="200" y="250" width="50" height="50" fill="#D3140A"/>
            <rect x="200" y="300" width="50" height="50" fill="#D3140A"/>
            <rect x="150" y="300" width="50" height="50" fill="#FEEA35"/>
            <rect x="150" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="100" y="250" width="50" height="50" fill="#FEEA35"/>
            <rect x="150" y="350" width="50" height="50" fill="#FEEA35"/>
            <rect x="150" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="200" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="200" y="500" width="50" height="50" fill="#F65924"/>
            <rect x="250" y="500" width="50" height="50" fill="#F65924"/>
            <rect x="200" y="550" width="50" height="50" fill="#F65924"/>
            <rect x="250" y="550" width="50" height="50" fill="#F65924"/>
            <rect x="350" y="550" width="50" height="50" fill="#F65924"/>
            <rect x="350" y="600" width="50" height="50" fill="#F65924"/>
            <rect x="400" y="600" width="50" height="50" fill="#F65924"/>
            <rect x="450" y="600" width="50" height="50" fill="#F65924"/>
            <rect x="350" y="650" width="50" height="50" fill="#F65924"/>
            <rect x="400" y="650" width="50" height="50" fill="#F65924"/>
            <rect x="450" y="650" width="50" height="50" fill="#F65924"/>
            <rect x="500" y="650" width="50" height="50" fill="#F65924"/>
            <rect x="400" y="700" width="50" height="50" fill="#F65924"/>
            <rect x="450" y="700" width="50" height="50" fill="#F65924"/>
            <rect x="450" y="750" width="50" height="50" fill="#F65924"/>
            <rect x="450" y="800" width="50" height="50" fill="#F65924"/>
            <rect x="500" y="700" width="50" height="50" fill="#F65924"/>
            <rect x="400" y="550" width="50" height="50" fill="#F65924"/>
            <rect x="400" y="500" width="50" height="50" fill="#F65924"/>
            <rect x="400" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="500" y="550" width="50" height="50" fill="#F65924"/>
            <rect x="500" y="500" width="50" height="50" fill="#F65924"/>
            <rect x="500" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="500" y="350" width="50" height="50" fill="#F65924"/>
            <rect x="550" y="350" width="50" height="50" fill="#F65924"/>
            <rect x="600" y="350" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="350" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="100" width="50" height="50" fill="#F65924"/>
            <rect x="700" y="100" width="50" height="50" fill="#F65924"/>
            <rect x="750" y="100" width="50" height="50" fill="#F65924"/>
            <rect x="800" y="100" width="50" height="50" fill="#F65924"/>
            <rect x="850" y="100" width="50" height="50" fill="#F65924"/>
            <rect x="800" y="250" width="50" height="50" fill="#F65924"/>
            <rect x="850" y="250" width="50" height="50" fill="#F65924"/>
            <rect x="900" y="250" width="50" height="50" fill="#F65924"/>
            <rect x="950" y="250" width="50" height="50" fill="#F65924"/>
            <rect x="600" y="100" width="50" height="50" fill="#F65924"/>
            <rect x="550" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="600" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="200" width="50" height="50" fill="#F65924"/>
            <rect x="700" y="200" width="50" height="50" fill="#F65924"/>
            <rect x="750" y="200" width="50" height="50" fill="#F65924"/>
            <rect x="800" y="200" width="50" height="50" fill="#F65924"/>
            <rect x="850" y="200" width="50" height="50" fill="#F65924"/>
            <rect x="900" y="200" width="50" height="50" fill="#F65924"/>
            <rect x="800" y="350" width="50" height="50" fill="#F65924"/>
            <rect x="850" y="350" width="50" height="50" fill="#F65924"/>
            <rect x="900" y="350" width="50" height="50" fill="#F65924"/>
            <rect x="950" y="350" width="50" height="50" fill="#F65924"/>
            <rect x="600" y="200" width="50" height="50" fill="#F65924"/>
            <rect x="550" y="200" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="250" width="50" height="50" fill="#F65924"/>
            <rect x="600" y="250" width="50" height="50" fill="#F65924"/>
            <rect x="550" y="250" width="50" height="50" fill="#F65924"/>
            <rect x="700" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="700" y="350" width="50" height="50" fill="black"/>
            <rect x="750" y="350" width="50" height="50" fill="black"/>
            <rect x="750" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="800" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="600" y="500" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="500" width="50" height="50" fill="#F65924"/>
            <rect x="500" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="500" y="300" width="50" height="50" fill="#F65924"/>
            <rect x="550" y="300" width="50" height="50" fill="#F65924"/>
            <rect x="600" y="300" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="300" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="50" width="50" height="50" fill="#F65924"/>
            <rect x="700" y="50" width="50" height="50" fill="#F65924"/>
            <rect x="750" y="50" width="50" height="50" fill="#F65924"/>
            <rect x="800" y="50" width="50" height="50" fill="#F65924"/>
            <rect x="550" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="600" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="650" y="150" width="50" height="50" fill="#F65924"/>
            <rect x="700" y="150" width="50" height="50" fill="#F65924"/>
            <rect x="750" y="150" width="50" height="50" fill="#F65924"/>
            <rect x="800" y="150" width="50" height="50" fill="#F65924"/>
            <rect x="850" y="150" width="50" height="50" fill="#F65924"/>
            <rect x="800" y="300" width="50" height="50" fill="#F65924"/>
            <rect x="850" y="300" width="50" height="50" fill="#F65924"/>
            <rect x="900" y="300" width="50" height="50" fill="#F65924"/>
            <rect x="950" y="300" width="50" height="50" fill="#F65924"/>
            <rect x="600" y="150" width="50" height="50" fill="#F65924"/>
            <rect x="700" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="700" y="300" width="50" height="50" fill="black"/>
            <rect x="750" y="300" width="50" height="50" fill="black"/>
            <rect x="750" y="250" width="50" height="50" fill="white"/>
            <rect x="700" y="250" width="50" height="50" fill="black"/>
            <rect x="750" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="800" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="850" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="900" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="550" y="550" width="50" height="50" fill="#F65924"/>
            <rect x="450" y="550" width="50" height="50" fill="#F65924"/>
            <rect x="450" y="500" width="50" height="50" fill="#F65924"/>
            <rect x="450" y="450" width="50" height="50" fill="#F65924"/>
            <rect x="450" y="400" width="50" height="50" fill="#F65924"/>
            <rect x="250" y="600" width="50" height="50" fill="#F65924"/>
            <rect x="100" y="300" width="50" height="50" fill="#FEEA35"/>
            <rect x="100" y="100" width="50" height="50" fill="black"/>
            <rect x="200" y="100" width="50" height="50" fill="black"/>
            <rect x="200" y="150" width="50" height="50" fill="black"/>
            <rect x="250" y="200" width="50" height="50" fill="black"/>
            <rect x="250" y="250" width="50" height="50" fill="black"/>
            <rect x="250" y="300" width="50" height="50" fill="black"/>
            <rect x="200" y="350" width="50" height="50" fill="black"/>
            <rect x="200" y="400" width="50" height="50" fill="black"/>
            <rect x="250" y="450" width="50" height="50" fill="black"/>
            <rect x="300" y="500" width="50" height="50" fill="black"/>
            <rect x="350" y="500" width="50" height="50" fill="black"/>
            <rect x="350" y="453" width="50" height="50" fill="black"/>
            <rect x="350" y="450" width="50" height="50" fill="black"/>
            <rect x="400" y="400" width="50" height="50" fill="black"/>
            <rect x="450" y="350" width="50" height="50" fill="black"/>
            <rect x="450" y="300" width="50" height="50" fill="black"/>
            <rect x="500" y="250" width="50" height="50" fill="black"/>
            <rect x="500" y="200" width="50" height="50" fill="black"/>
            <rect x="550" y="150" width="50" height="50" fill="black"/>
            <rect x="550" y="100" width="50" height="50" fill="black"/>
            <rect x="600" y="50" width="50" height="50" fill="black"/>
            <rect x="650" width="50" height="50" fill="black"/>
            <rect x="700" width="50" height="50" fill="black"/>
            <rect x="750" width="50" height="50" fill="black"/>
            <rect x="800" width="50" height="50" fill="black"/>
            <rect x="850" y="50" width="50" height="50" fill="black"/>
            <rect x="900" y="100" width="50" height="50" fill="black"/>
            <rect x="900" y="150" width="50" height="50" fill="black"/>
            <rect x="950" y="200" width="50" height="50" fill="black"/>
            <rect x="1000" y="250" width="50" height="50" fill="black"/>
            <rect x="1000" y="300" width="50" height="50" fill="black"/>
            <rect x="1000" y="350" width="50" height="50" fill="black"/>
            <rect x="950" y="400" width="50" height="50" fill="black"/>
            <rect x="900" y="450" width="50" height="50" fill="black"/>
            <rect x="850" y="450" width="50" height="50" fill="black"/>
            <rect x="800" y="500" width="50" height="50" fill="black"/>
            <rect x="750" y="500" width="50" height="50" fill="black"/>
            <rect x="700" y="500" width="50" height="50" fill="black"/>
            <rect x="750" y="550" width="50" height="50" fill="black"/>
            <rect x="750" y="600" width="50" height="50" fill="black"/>
            <rect x="700" y="650" width="50" height="50" fill="black"/>
            <rect x="600" y="550" width="50" height="50" fill="black"/>
            <rect x="650" y="550" width="50" height="50" fill="#FEEA35"/>
            <rect x="650" y="600" width="50" height="50" fill="#FEEA35"/>
            <rect x="600" y="600" width="50" height="50" fill="#FEEA35"/>
            <rect x="600" y="650" width="50" height="50" fill="#FEEA35"/>
            <rect x="550" y="650" width="50" height="50" fill="#FEEA35"/>
            <rect x="650" y="650" width="50" height="50" fill="#FEEA35"/>
            <rect x="600" y="700" width="50" height="50" fill="#FEEA35"/>
            <rect x="550" y="700" width="50" height="50" fill="#FEEA35"/>
            <rect x="700" y="550" width="50" height="50" fill="#FEEA35"/>
            <rect x="700" y="600" width="50" height="50" fill="#FEEA35"/>
            <rect x="550" y="500" width="50" height="50" fill="black"/>
            <rect x="550" y="600" width="50" height="50" fill="black"/>
            <rect x="500" y="600" width="50" height="50" fill="black"/>
            <rect x="800" y="650" width="50" height="50" fill="black"/>
            <rect x="750" y="700" width="50" height="50" fill="black"/>
            <rect x="700" y="700" width="50" height="50" fill="black"/>
            <rect x="650" y="700" width="50" height="50" fill="black"/>
            <rect x="600" y="750" width="50" height="50" fill="black"/>
            <rect x="550" y="750" width="50" height="50" fill="black"/>
            <rect x="550" y="800" width="50" height="50" fill="black"/>
            <rect x="500" y="850" width="50" height="50" fill="black"/>
            <rect x="450" y="850" width="50" height="50" fill="black"/>
            <rect x="400" y="850" width="50" height="50" fill="black"/>
            <rect x="350" y="850" width="50" height="50" fill="black"/>
            <rect x="350" y="800" width="50" height="50" fill="black"/>
            <rect x="350" y="750" width="50" height="50" fill="black"/>
            <rect x="400" y="750" width="50" height="50" fill="black"/>
            <rect x="500" y="750" width="50" height="50" fill="black"/>
            <rect x="300" y="550" width="50" height="50" fill="black"/>
            <rect x="300" y="600" width="50" height="50" fill="black"/>
            <rect x="300" y="650" width="50" height="50" fill="black"/>
            <rect x="350" y="700" width="50" height="50" fill="black"/>
            <rect x="300" y="700" width="50" height="50" fill="black"/>
            <rect x="50" y="150" width="50" height="50" fill="black"/>
            <rect y="200" width="50" height="50" fill="black"/>
            <rect y="250" width="50" height="50" fill="black"/>
            <rect y="300" width="50" height="50" fill="black"/>
            <rect x="50" y="350" width="50" height="50" fill="black"/>
            <rect x="100" y="350" width="50" height="50" fill="black"/>
            <rect x="100" y="400" width="50" height="50" fill="black"/>
            <rect x="100" y="450" width="50" height="50" fill="black"/>
            <rect x="150" y="500" width="50" height="50" fill="black"/>
            <rect x="150" y="550" width="50" height="50" fill="black"/>
            <rect x="200" y="600" width="50" height="50" fill="black"/>
            <rect x="250" y="650" width="50" height="50" fill="black"/>
            </svg>
          </g>
        ))}
      </svg>
    </section>
  );
}

export default HERO;
