import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import { parallaxLayers } from '../../../data/portfolio';
import { BgWrap, Layer } from './ParallaxBackground.styles';

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
    <BgWrap aria-hidden="true">
      {parallaxLayers.map((layer, index) => (
        <Layer
          key={`${layer.text}-${index}`}
          ref={(element) => {
            layersRef.current[index] = element;
          }}
          style={{
            top: layer.top,
            [layer.side]: layer.offset,
            fontSize: layer.fontSize,
            color: layer.color,
            fontFamily: layer.japanese ? '"Noto Sans JP", sans-serif' : undefined,
            fontWeight: layer.japanese ? 900 : undefined,
          }}
        >
          {layer.text}
        </Layer>
      ))}
    </BgWrap>
  );
};

export default ParallaxBackground;
