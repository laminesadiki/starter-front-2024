import { render } from '@testing-library/react';
import Header from './Header';
import { describe, it, expect } from 'vitest';

vi.mock('react-i18next', () => ({
   useTranslation: () => ({ t: (key: string) => key }),
}));

describe('Header component', () => {
   it('renders the Header component correctly', () => {
      const { getByText } = render(<Header />);

      const titleElement = getByText('Opalexe');
      expect(titleElement).toBeInTheDocument();

      const welcomeMessageElement = getByText('home.opalexe.title');
      expect(welcomeMessageElement).toBeInTheDocument();
   });
});
