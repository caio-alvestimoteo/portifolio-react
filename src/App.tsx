import type { FC } from 'react';
import Hero from './components/sections/Hero';
import Manifest from './components/sections/Manifest';
import Project from './components/sections/Project';
import Timeline from './components/sections/Timeline';
import Skills from './components/sections/Skills';
import Footer from './components/sections/Footer';
import Scanner from './components/layout/Scanner';
import './styles/globals.scss';

const App: FC = () => {
  return (
    <>
      <Scanner />
      <div className="page">
        <Hero />
        <Manifest />
        <Timeline />
        <Project />
        <Skills />
        <Footer />
      </div>
    </>
  );
};

export default App;
