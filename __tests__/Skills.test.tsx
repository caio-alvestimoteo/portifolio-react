import { render, screen } from '@testing-library/react';
import Skills from '../src/components/sections/Skills/Skills';
import { stackGroups } from '../src/data/portfolio';

describe('Skills', () => {
  beforeEach(() => {
    render(<Skills />);
  });

  describe('estrutura da seção', () => {
    // verifica que a âncora de navegação da seção skills existe no DOM
    it('deve ter o id "skills" para navegação', () => {
      expect(document.getElementById('skills')).toBeInTheDocument();
    });

    // verifica que existe exatamente um h2 identificando a seção
    it('deve conter exatamente um heading h2', () => {
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
    });
  });

  describe('grupos do stack', () => {
    // verifica que todos os grupos definidos em portfolio.ts são renderizados
    // usa getAllByText pois o título de alguns grupos pode coincidir com uma tag interna
    it('deve renderizar o título de cada grupo de stack do portfolio', () => {
      stackGroups.forEach((group) => {
        expect(screen.getAllByText(group.title).length).toBeGreaterThanOrEqual(1);
      });
    });

    // verifica que a contagem de grupos renderizados bate com o definido nos dados
    it('deve renderizar a quantidade correta de grupos', () => {
      const groupNums = stackGroups.map((g) => g.num);
      groupNums.forEach((num) => {
        expect(screen.getByText(num)).toBeInTheDocument();
      });
    });
  });
});
