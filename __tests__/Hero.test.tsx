import { render, screen } from '@testing-library/react';
import Hero from '../src/components/sections/Hero/Hero';
import { chips, stats } from '../src/data/portfolio';

describe('Hero', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  describe('estrutura da seção', () => {
    // verifica que a âncora de navegação da seção existe no DOM
    it('deve ter o id "hero" para navegação', () => {
      expect(document.getElementById('hero')).toBeInTheDocument();
    });

    // verifica que existe exatamente um h1 na seção hero
    it('deve conter exatamente um heading h1', () => {
      expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    });
  });

  describe('chips de tecnologia', () => {
    // verifica que todos os chips definidos em portfolio.ts são renderizados
    // usa getAllByText pois alguns nomes de chip podem aparecer também em outros elementos
    it('deve renderizar todos os chips do portfolio', () => {
      chips.forEach((chip) => {
        expect(screen.getAllByText(chip.name).length).toBeGreaterThanOrEqual(1);
      });
    });
  });

  describe('card de estatísticas', () => {
    // verifica que os valores de cada stat definido em portfolio.ts aparecem no card
    // usa stat.value (ex: "15+", "07") que são mais estáveis que labels descritivos
    it('deve renderizar o valor de cada stat de experiência', () => {
      stats.forEach((stat) => {
        expect(screen.getByText(stat.value)).toBeInTheDocument();
      });
    });
  });
});
