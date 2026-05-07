import { render, screen } from '@testing-library/react';
import Manifest from '../src/components/sections/Manifest/Manifest';
import { techStack, manifestData } from '../src/data/portfolio';

describe('Manifest', () => {
  beforeEach(() => {
    render(<Manifest />);
  });

  describe('estrutura da seção', () => {
    // verifica que a âncora de navegação da seção manifest existe no DOM
    it('deve ter o id "manifest" para navegação', () => {
      expect(document.getElementById('manifest')).toBeInTheDocument();
    });

    // verifica que existe exatamente um h2 identificando a seção
    it('deve conter exatamente um heading h2', () => {
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
    });
  });

  describe('parágrafos do manifesto', () => {
    // verifica que todos os parágrafos definidos em portfolio.ts são renderizados
    // se o texto de um parágrafo mudar nos dados, o teste acompanha automaticamente
    it('deve renderizar todos os parágrafos do manifesto', () => {
      manifestData.paragraphs.forEach((paragraph) => {
        expect(screen.getByText(paragraph)).toBeInTheDocument();
      });
    });
  });

  describe('radar técnico', () => {
    // verifica que todos os labels do radar definidos em portfolio.ts são exibidos
    // se uma métrica for adicionada ou removida, o teste se atualiza
    it('deve renderizar o label de cada métrica do radar técnico', () => {
      techStack.forEach((metric) => {
        expect(screen.getByText(metric.label)).toBeInTheDocument();
      });
    });

    // verifica que os values do radar também são renderizados
    it('deve renderizar o value de cada métrica do radar técnico', () => {
      techStack.forEach((metric) => {
        expect(screen.getByText(metric.value)).toBeInTheDocument();
      });
    });
  });
});
