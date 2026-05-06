import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { navSections } from '../../data/portfolio';

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
    <div className="top-nav">
      <div className="top-nav__brand">
        <strong>CAIO TIMOTEO</strong>
        <span>// PORTFOLIO 2026 / FILE-77.A1</span>
      </div>
      <div className="top-nav__controls">
        {navSections.map((section) => (
          <button
            key={section.id}
            className={`top-nav__dot${activeSection === section.id ? ' top-nav__dot--active' : ''}`}
            title={section.name}
            type="button"
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
          />
        ))}
      </div>
    </div>
  );
};

export default TopNav;
