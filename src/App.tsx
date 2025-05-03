import { useState, useEffect, useRef } from 'react';
import './App.css';
import HERO from './components/hero';
import Projects from './components/projects';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null); // Reference to the #root container

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark-mode');
  //   } else {
  //     document.body.classList.remove('dark-mode');
  //   }
  // }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = rootRef.current?.scrollTop || 0; // Get scroll position of #root
      console.log('Scroll Position:', scrollPosition);
      setShowNavbar(scrollPosition > window.innerHeight * 0.5); // Show navbar after scrolling halfway through the hero section
    };

    const rootElement = rootRef.current;
    rootElement?.addEventListener('scroll', handleScroll); // Attach scroll listener to #root

    return () => rootElement?.removeEventListener('scroll', handleScroll); // Cleanup listener
  }, []);

  return (
    <div id="root" ref={rootRef}>
      <Navbar isVisible={showNavbar} />
      <section>
        <HERO />
      </section>
      <section>
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
