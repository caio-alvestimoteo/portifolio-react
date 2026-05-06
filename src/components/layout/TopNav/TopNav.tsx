import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { navSections } from '../../../data/portfolio';
import { Nav, Brand, Controls, Dot } from './TopNav.styles';

const TopNav: FC = () => {
  const [activeSection, setActiveSection] = useState(navSections[0]?.id ?? '');

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.4;
      let nextActive = navSections[0]?.id ?? '';

      navSections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= marker) nextActive = section.id;
      });

      setActiveSection(nextActive);
    };

    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <Nav>
      <Brand>
        <strong>CAIO TIMOTEO</strong>
        <span>// PORTFOLIO 2026 / FILE-77.A1</span>
      </Brand>
      <Controls>
        {navSections.map((section) => (
          <Dot
            key={section.id}
            $active={activeSection === section.id}
            title={section.name}
            type="button"
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
          />
        ))}
      </Controls>
    </Nav>
  );
};

export default TopNav;
