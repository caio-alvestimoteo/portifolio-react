import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Tracker, Fill } from './Scanner.styles';

const Scanner: FC = () => {
  const [progress, setProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
      setHasScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Tracker aria-hidden="true" $scrolled={hasScrolled}>
      <Fill $progress={progress} $scrolled={hasScrolled} />
      <span className="sr-only">Progress {Math.round(progress)}%</span>
    </Tracker>
  );
};

export default Scanner;
