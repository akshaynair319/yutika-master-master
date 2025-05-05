import { useEffect, useState } from 'react';
import './hero.css';
import gs from '../assets/images/gs.png'; // Import the image
import nift from '../assets/images/nift.png'; // Import the image
import delhi from '../assets/images/delhi.png'; // Import the image
import atom from '../assets/images/atom.png'; // Import the image
import yutika from '../assets/yutika.svg'; // Import the image
import char from '../assets/char.svg'; // Import the image
import sticky from '../assets/sticky.svg'; // Import the image
import pen from '../assets/pen.svg'; // Import the image
import bezier from '../assets/bezier.svg'; // Import the image

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

  useEffect(() => {
    const canvas = document.getElementById('rotatingCanvas');
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }
    const ctx = (canvas as HTMLCanvasElement).getContext('2d');
    if (!ctx) {
      console.error('2D context not available');
      return;
    }
    const images = [yutika, char, sticky, pen, bezier, char, yutika, pen]; // Array of image sources
    const numImages = 8; // Number of images
    const radius = 150; // Radius of the circle
    const centerX = (canvas as HTMLCanvasElement).width / 2;
    const centerY = (canvas as HTMLCanvasElement).height / 2;
    let angleOffset = 0; // Initial rotation angle

    // Load images
    const loadedImages: HTMLImageElement[] = [];
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      loadedImages.push(img);
    });

    // Resize canvas to fit container
    (canvas as HTMLCanvasElement).width = canvas.offsetWidth;
    (canvas as HTMLCanvasElement).height = canvas.offsetHeight;

    // Draw the circle and images
    const draw = () => {
      ctx.clearRect(0, 0, (canvas as HTMLCanvasElement).width, (canvas as HTMLCanvasElement).height); // Clear the canvas

      // Draw outer circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius + 50, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(217, 217, 217, 0.02)';
      ctx.fill();
      
      // Draw the middle circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(217, 217, 217, 0.5)';
      ctx.setLineDash([4, 4]); // Dotted effect
      ctx.fillStyle = 'rgba(217, 217, 217, 0.02)';
      ctx.fill();
      ctx.stroke();

      // Draw the images
      for (let i = 0; i < numImages; i++) {
        const angle = (i * (2 * Math.PI)) / numImages + angleOffset; // Calculate angle for each image
        const x = centerX + radius * Math.cos(angle) - 15; // Adjust x to center the image
        const y = centerY + radius * Math.sin(angle) - 15; // Adjust y to center the image
        const img = loadedImages[i % loadedImages.length]; // Cycle through images

        if (img.complete) {
          ctx.drawImage(img, x, y, 30, 30); // Draw the image
        }
      }

      // Draw inner circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius - 50, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(217, 217, 217, 0.02)';
      ctx.fill();

      const img = loadedImages[0];

      if (img.complete) {
        ctx.drawImage(img, centerX - 50, centerY - 50, 100, 100); // Draw the image
      }

      angleOffset += 0.01; // Increment the rotation angle
      requestAnimationFrame(draw); // Animate
    };

    draw(); // Start the animation
  }, []);

  return (
    <div className="page-section hero">
      <div className="hero-content">
        <span className="hero-title" onClick={() => setDarkMode(!darkMode)}>Hi, I'm Yutika!</span>
        <span className="hero-subtitle">
        I design intuitive experiences by stepping into the user's world and turning complexity into clarity.
        </span>
        <div className="hero-jobs">
          <span className="hero-job">
            Product Designer at <img src={gs} alt="Goldman Sachs" className="hero-image" /> Goldman Sachs
          </span>
          <span className="hero-job">
            Previously an inern at <img src={atom} alt="Atom EI" className="hero-image" /> Atom EI and <img src={delhi} alt="Delhi Govt." className="hero-image" /> Govt. of India
          </span>
          <span className="hero-job">
            Studied at <img src={nift} alt="NIFT" className="hero-image" />National Institute of Fashion Technology
          </span>
        </div>
      </div>
      <div className="hero-animation">
        <canvas id="rotatingCanvas" className="hero-canvas" style={{height: "100%", width: "100%"}}></canvas>
      </div>
    </div>
  );
}

export default HERO;
