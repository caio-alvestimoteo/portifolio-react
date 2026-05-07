import { render, screen } from '@testing-library/react';
import Footer from '../src/components/sections/Footer/Footer';
import { footerContacts } from '../src/data/portfolio';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  describe('estrutura da seção', () => {
    // verifica que a âncora de navegação da seção footer existe no DOM
    it('deve ter o id "footer" para navegação', () => {
      expect(document.getElementById('footer')).toBeInTheDocument();
    });
  });

  describe('itens de contato', () => {
    // verifica que todos os contatos definidos em portfolio.ts são renderizados
    // se um contato for adicionado, removido ou alterado nos dados, o teste se atualiza
    it('deve renderizar o valor de cada contato do portfolio', () => {
      footerContacts.forEach((contact) => {
        expect(screen.getByText(contact.value)).toBeInTheDocument();
      });
    });

    // verifica que os labels de contato aparecem em maiúsculas conforme o componente
    it('deve renderizar o label de cada contato em maiúsculas', () => {
      footerContacts.forEach((contact) => {
        expect(screen.getByText(contact.label.toUpperCase())).toBeInTheDocument();
      });
    });
  });
});
