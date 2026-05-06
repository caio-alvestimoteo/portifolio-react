import { useEffect, useState } from 'react';
import type { FC } from 'react';
import { Tracker, Fill } from './Scanner.styles';

const Scanner: FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Tracker aria-hidden="true">
      <Fill style={{ width: `${progress}%` }} />
      <span className="sr-only">Progress {Math.round(progress)}%</span>
    </Tracker>
  );
};

export default Scanner;
