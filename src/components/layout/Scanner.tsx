import { useEffect, useState } from 'react';
import type { FC } from 'react';

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
    <div className="scroll-tracker" aria-hidden="true">
      <div className="scroll-tracker__fill" style={{ width: `${progress}%` }} />
      <span className="sr-only">Progress {Math.round(progress)}%</span>
    </div>
  );
};

export default Scanner;
