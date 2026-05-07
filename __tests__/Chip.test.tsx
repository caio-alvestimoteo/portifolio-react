import { render, screen } from '@testing-library/react';
import Chip from '../src/ui/Chip';
import { makeChipItem } from './test-helpers/factories';

describe('Chip', () => {
  describe('dado um texto simples', () => {
    const chip = makeChipItem({ name: 'Alpha' });

    beforeEach(() => {
      render(<Chip>{chip.name}</Chip>);
    });

    // verifica que qualquer texto passado como children é exibido
    it('deve renderizar o texto recebido como children', () => {
      expect(screen.getByText(chip.name)).toBeInTheDocument();
    });
  });

  describe('dado um texto com múltiplas palavras', () => {
    const chip = makeChipItem({ name: 'Beta Gamma Delta' });

    beforeEach(() => {
      render(<Chip>{chip.name}</Chip>);
    });

    // verifica que o texto composto é preservado sem truncamento
    it('deve renderizar o texto completo sem truncar', () => {
      expect(screen.getByText('Beta Gamma Delta')).toBeInTheDocument();
    });
  });

  describe('dado variações de conteúdo via factory', () => {
    // verifica que o componente renderiza corretamente para diferentes inputs
    it.each([
      [makeChipItem({ name: 'Item Um' })],
      [makeChipItem({ name: 'Item Dois' })],
      [makeChipItem({ name: 'Item Três' })],
    ])('deve renderizar o chip com o nome fornecido pela factory', (chip) => {
      render(<Chip>{chip.name}</Chip>);
      expect(screen.getByText(chip.name)).toBeInTheDocument();
    });
  });
});
