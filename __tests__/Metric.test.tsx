import { render, screen } from '@testing-library/react';
import Metric from '../src/ui/Metric';
import { makeMetric } from './test-helpers/factories';

describe('Metric', () => {
  describe('dado uma métrica com label e value padrão', () => {
    const metric = makeMetric();

    beforeEach(() => {
      render(<Metric metric={metric} />);
    });

    // verifica que o label (categoria) da métrica é exibido
    it('deve renderizar o label da métrica', () => {
      expect(screen.getByText(metric.label)).toBeInTheDocument();
    });

    // verifica que o value (status/nível) da métrica é exibido
    it('deve renderizar o value da métrica', () => {
      expect(screen.getByText(metric.value)).toBeInTheDocument();
    });
  });

  describe('dado uma métrica com dados customizados via factory', () => {
    const metric = makeMetric({ label: 'Label Teste', value: 'Value Teste' });

    beforeEach(() => {
      render(<Metric metric={metric} />);
    });

    // verifica que a factory permite sobrescrever label e value independentemente
    it('deve renderizar o label customizado', () => {
      expect(screen.getByText('Label Teste')).toBeInTheDocument();
    });

    // verifica que o value customizado via override também é exibido
    it('deve renderizar o value customizado', () => {
      expect(screen.getByText('Value Teste')).toBeInTheDocument();
    });
  });

  describe('dado múltiplas métricas via factory', () => {
    // verifica que o componente renderiza corretamente para diferentes combinações
    it.each([
      [makeMetric({ label: 'Cat A', value: 'Val A' })],
      [makeMetric({ label: 'Cat B', value: 'Val B' })],
    ])('deve renderizar label e value da métrica', (metric) => {
      render(<Metric metric={metric} />);
      expect(screen.getByText(metric.label)).toBeInTheDocument();
      expect(screen.getByText(metric.value)).toBeInTheDocument();
    });
  });
});
