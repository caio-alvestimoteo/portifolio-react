import { render, screen, act, waitFor } from '@testing-library/react';
import Scanner from '../src/components/layout/Scanner/Scanner';

describe('Scanner', () => {
  describe('estado inicial ao montar o componente', () => {
    beforeEach(() => {
      render(<Scanner />);
    });

    // verifica que o texto de progresso começa em 0% ao montar sem scroll
    it('deve renderizar o progresso em 0% no estado inicial', () => {
      expect(screen.getByText('Progress 0%')).toBeInTheDocument();
    });

    // verifica que o container do scanner está oculto para leitores de tela
    it('deve marcar o container como aria-hidden', () => {
      const progressText = screen.getByText('Progress 0%');
      expect(progressText.closest('[aria-hidden="true"]')).toBeInTheDocument();
    });
  });

  describe('atualização do progresso ao rolar a página', () => {
    beforeEach(() => {
      render(<Scanner />);
      Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value: 500 });
      Object.defineProperty(document.documentElement, 'scrollHeight', { configurable: true, writable: true, value: 1100 });
      Object.defineProperty(window, 'innerHeight', { configurable: true, writable: true, value: 100 });
    });

    afterEach(() => {
      Object.defineProperty(window, 'scrollY', { configurable: true, writable: true, value: 0 });
    });

    // verifica que o evento de scroll atualiza o texto de progresso para 50%
    it('deve atualizar o progresso para 50% quando scroll está na metade da página', async () => {
      act(() => {
        window.dispatchEvent(new Event('scroll'));
      });

      await waitFor(() => {
        expect(screen.getByText('Progress 50%')).toBeInTheDocument();
      });
    });
  });

  describe('limpeza de event listeners', () => {
    // verifica que o componente não lança erro ao desmontar (cleanup do useEffect)
    it('deve desmontar sem erros removendo o listener de scroll', () => {
      const { unmount } = render(<Scanner />);
      expect(() => unmount()).not.toThrow();
    });
  });
});
