import { useEffect } from 'react';
import type { FC } from 'react';
import Hero from './components/sections/Hero/Hero';
import Manifest from './components/sections/Manifest/Manifest';
import Project from './components/sections/Project/Project';
import Timeline from './components/sections/Timeline/Timeline';
import Skills from './components/sections/Skills/Skills';
import Footer from './components/sections/Footer/Footer';
import Scanner from './components/layout/Scanner/Scanner';
import TopNav from './components/layout/TopNav/TopNav';
import SocialDock from './components/layout/SocialDock/SocialDock';
import ParallaxBackground from './components/layout/ParallaxBackground/ParallaxBackground';
import { GlobalStyle } from './components/shared.styles';

const App: FC = () => {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal--in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Scanner />
      <TopNav />
      <SocialDock />
      <ParallaxBackground />
      <Hero />
      <Manifest />
      <Timeline />
      <Project />
      <Skills />
      <Footer />
    </>
  );
};

export default App;
