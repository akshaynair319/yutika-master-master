import { useState, useEffect } from 'react';
import './App.css';
import HERO from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || 0; // Current scroll position
      const scrollHeight = document.documentElement.scrollHeight; // Total scrollable height
      const clientHeight = window.innerHeight; // Height of the viewport
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100; // Calculate scroll progress as a percentage
      setScrollProgress(progress);

      // Show navbar after scrolling 25% of the viewport height
      setShowNavbar(scrollTop > clientHeight * 0.25);

      console.log(`Scroll Progress: ${progress.toFixed(2)}%`); // Log scroll progress
    };

    window.addEventListener('scroll', handleScroll); // Attach scroll listener to #root

    return () => window.removeEventListener('scroll', handleScroll); // Cleanup listener
  }, []);

  return (
    <>
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <Navbar isVisible={showNavbar}/>
      <HERO />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
