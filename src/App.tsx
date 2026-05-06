import { useEffect } from 'react';
import type { FC } from 'react';
import Hero from './components/sections/Hero';
import Manifest from './components/sections/Manifest';
import Project from './components/sections/Project';
import Timeline from './components/sections/Timeline';
import Skills from './components/sections/Skills';
import Footer from './components/sections/Footer';
import Scanner from './components/layout/Scanner';
import TopNav from './components/layout/TopNav';
import SocialDock from './components/layout/SocialDock';
import ParallaxBackground from './components/layout/ParallaxBackground';
import './styles/globals.scss';

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
