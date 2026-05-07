import { render, screen } from '@testing-library/react';
import Badge from '../src/ui/Badge';

describe('Badge', () => {
  describe('dado um conteúdo de texto simples', () => {
    beforeEach(() => {
      render(<Badge>Formação</Badge>);
    });

    // verifica que o texto passado como children é exibido corretamente
    it('deve renderizar o texto do badge', () => {
      expect(screen.getByText('Formação')).toBeInTheDocument();
    });
  });

  describe('dado um conteúdo com múltiplas palavras', () => {
    beforeEach(() => {
      render(<Badge>Dev Sênior IA</Badge>);
    });

    // verifica que badges com mais de uma palavra mantêm o texto completo
    it('deve renderizar o texto completo sem truncar', () => {
      expect(screen.getByText('Dev Sênior IA')).toBeInTheDocument();
    });
  });

  describe('dado um valor numérico como children', () => {
    beforeEach(() => {
      render(<Badge>{2024}</Badge>);
    });

    // verifica que números também são aceitos e renderizados como texto
    it('deve renderizar o número convertido em texto', () => {
      expect(screen.getByText('2024')).toBeInTheDocument();
    });
  });
});
