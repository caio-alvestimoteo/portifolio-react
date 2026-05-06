import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import { parallaxLayers } from '../../data/portfolio';

const ParallaxBackground: FC = () => {
  const layersRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const config = parallaxLayers[index];
        layer.style.transform = `translate3d(${y * config.px}px, ${-y * config.py}px, 0)`;
      });
    };

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="parallax-bg" aria-hidden="true">
      {parallaxLayers.map((layer, index) => (
        <div
          key={`${layer.text}-${index}`}
          ref={(element) => {
            layersRef.current[index] = element;
          }}
          className="parallax-bg__layer"
          style={{
            top: layer.top,
            [layer.side]: layer.offset,
            fontSize: layer.fontSize,
            color: layer.color,
            fontFamily: layer.japanese ? '"Noto Sans JP", sans-serif' : undefined,
            fontWeight: layer.japanese ? 900 : undefined
          }}
        >
          {layer.text}
        </div>
      ))}
    </div>
  );
};

export default ParallaxBackground;
