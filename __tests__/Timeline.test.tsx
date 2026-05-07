import { render, screen } from '@testing-library/react';
import Timeline from '../src/components/sections/Timeline/Timeline';
import { timelineData } from '../src/data/portfolio';

describe('Timeline', () => {
  beforeEach(() => {
    render(<Timeline />);
  });

  describe('estrutura da seção', () => {
    // verifica que a âncora de navegação da seção timeline existe no DOM
    it('deve ter o id "timeline" para navegação', () => {
      expect(document.getElementById('timeline')).toBeInTheDocument();
    });

    // verifica que existe exatamente um h2 identificando a seção
    it('deve conter exatamente um heading h2', () => {
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
    });
  });

  describe('entradas da timeline', () => {
    // verifica que o número de h3 bate com a quantidade de entradas em portfolio.ts
    // se uma entrada for adicionada ou removida dos dados, o teste detecta automaticamente
    it('deve renderizar um h3 para cada entrada definida no portfolio', () => {
      const entries = screen.getAllByRole('heading', { level: 3 });
      expect(entries).toHaveLength(timelineData.length);
    });

    // verifica que os anos de cada entrada aparecem na timeline
    // anos são mais estáveis que títulos e descrições
    it('deve renderizar o ano de cada entrada da timeline', () => {
      timelineData.forEach((entry) => {
        expect(screen.getByText(String(entry.year))).toBeInTheDocument();
      });
    });
  });
});
