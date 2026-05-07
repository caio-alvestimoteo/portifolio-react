import { render, screen } from '@testing-library/react';
import Project from '../src/components/sections/Project/Project';
import { projectData } from '../src/data/portfolio';

describe('Project', () => {
  beforeEach(() => {
    render(<Project />);
  });

  describe('estrutura da seção', () => {
    // verifica que a âncora de navegação da seção project existe no DOM
    it('deve ter o id "project" para navegação', () => {
      expect(document.getElementById('project')).toBeInTheDocument();
    });

    // verifica que existe exatamente um h2 com o nome do projeto
    it('deve conter exatamente um heading h2', () => {
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
    });
  });

  describe('tags de tecnologia', () => {
    // verifica que todas as tags definidas em portfolio.ts são renderizadas
    // se uma tag for adicionada ou removida dos dados, o teste se atualiza
    it('deve renderizar todas as tags de tecnologia do projeto', () => {
      projectData.tags.forEach((tag) => {
        expect(screen.getByText(tag)).toBeInTheDocument();
      });
    });
  });

  describe('painéis de detalhamento', () => {
    // verifica que o título de cada painel definido em portfolio.ts é exibido
    it('deve renderizar o título de cada painel do projeto', () => {
      projectData.panels.forEach((panel) => {
        expect(screen.getByText(panel.title)).toBeInTheDocument();
      });
    });

    // verifica que a quantidade de h2 não ultrapassa o esperado (1 para o título do projeto)
    // os painéis usam outros elementos, não h2 adicionais
    it('deve renderizar exatamente 1 heading h2 (título do projeto)', () => {
      expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(1);
    });
  });
});
