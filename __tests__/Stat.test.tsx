import { render, screen } from '@testing-library/react';
import Stat from '../src/ui/Stat';
import { makeStat } from './test-helpers/factories';

describe('Stat', () => {
  describe('dado um stat com valor e label curto', () => {
    const stat = makeStat({ id: 'years', value: '15+', label: 'anos de experiência' });

    beforeEach(() => {
      render(<Stat stat={stat} />);
    });

    // verifica que o valor numérico/destaque é exibido no card
    it('deve renderizar o valor do stat', () => {
      expect(screen.getByText('15+')).toBeInTheDocument();
    });

    // verifica que o label descritivo aparece abaixo do valor
    it('deve renderizar o label completo quando tem até 4 palavras', () => {
      expect(screen.getByText('anos de experiência')).toBeInTheDocument();
    });
  });

  describe('dado um stat com label longo (mais de 4 palavras)', () => {
    // o componente trunca o label para as 4 primeiras palavras via .slice(0, 4)
    const stat = makeStat({ label: 'alfa beta gamma delta epsilon zeta' });

    beforeEach(() => {
      render(<Stat stat={stat} />);
    });

    // verifica que o truncamento para 4 palavras funciona corretamente
    it('deve exibir apenas as primeiras 4 palavras do label', () => {
      expect(screen.getByText('alfa beta gamma delta')).toBeInTheDocument();
    });

    // verifica que palavras além da 4ª são removidas da renderização
    it('não deve exibir a 5ª palavra em diante', () => {
      expect(screen.queryByText(/epsilon/)).not.toBeInTheDocument();
    });
  });

  describe('dado diferentes stats via factory', () => {
    // verifica que a factory suporta variações de dados sem duplicar setup
    it.each([
      [makeStat({ value: '07', label: 'frentes de atuação' })],
      [makeStat({ value: '2021', label: 'início em IA' })],
    ])('deve renderizar o valor do stat corretamente', (stat) => {
      render(<Stat stat={stat} />);
      expect(screen.getByText(stat.value)).toBeInTheDocument();
    });
  });
});
