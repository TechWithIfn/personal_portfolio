import React, { useEffect, useRef } from 'react';
import { ChevronDown, Code, Laptop, Rocket } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const textRef = useRef<HTMLSpanElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const roles = ['Developer', 'Designer', 'Innovator'];
    let currentIndex = 0;
    let currentChar = 0;
    let isDeleting = false;
    let isPaused = false;

    const typeText = () => {
      const currentRole = roles[currentIndex];
      const speed = isDeleting ? 50 : 150;

      if (textRef.current) {
        if (!isDeleting && !isPaused) {
          textRef.current.textContent = currentRole.substring(0, currentChar + 1);
          currentChar++;

          if (currentChar === currentRole.length) {
            isPaused = true;
            setTimeout(() => {
              isPaused = false;
              isDeleting = true;
            }, 2000);
          }
        }

        if (isDeleting && !isPaused) {
          textRef.current.textContent = currentRole.substring(0, currentChar - 1);
          currentChar--;

          if (currentChar === 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % roles.length;
          }
        }
      }

      setTimeout(typeText, speed);
    };

    typeText();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          theme === 'light'
            ? 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
            : 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
        } transition-colors duration-300`}></div>
        <div className="absolute w-full h-full">
          <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${
            theme === 'light'
              ? 'bg-blue-400/10'
              : 'bg-blue-500/10'
          } rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob transition-colors duration-300`}></div>
          <div className={`absolute top-1/3 right-1/4 w-72 h-72 ${
            theme === 'light'
              ? 'bg-purple-400/10'
              : 'bg-purple-500/10'
          } rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob animation-delay-2000 transition-colors duration-300`}></div>
          <div className={`absolute bottom-1/4 left-1/3 w-72 h-72 ${
            theme === 'light'
              ? 'bg-pink-400/10'
              : 'bg-pink-500/10'
          } rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-xl animate-blob animation-delay-4000 transition-colors duration-300`}></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Animated welcome text */}
          <div className="relative inline-block">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 animate-fade-in">
                Welcome to
              </span>
              <span className="block mt-2 text-gray-900 dark:text-white">
                My Portfolio
              </span>
            </h1>
          </div>

          {/* Animated role text */}
          <div className="flex items-center justify-center text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light">
            I am a <span ref={textRef} className="ml-2 font-semibold text-blue-600 dark:text-blue-400"></span>
            <span className="animate-blink">|</span>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences through elegant code and innovative solutions. 
            Let's turn your ideas into reality.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              { icon: Code, title: 'Clean Code', desc: 'Writing elegant, maintainable solutions' },
              { icon: Laptop, title: 'Responsive Design', desc: 'Beautiful on every device' },
              { icon: Rocket, title: 'Performance', desc: 'Lightning-fast experiences' }
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <a
              href="#portfolio"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-gray-600 dark:text-gray-300" />
      </div>
    </section>
  );
};

export default Hero;