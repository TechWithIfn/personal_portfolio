import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Join from './components/Join';
import Resources from './components/Resources';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Projects />
          <Blog />
          <Join />
          <Resources />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;