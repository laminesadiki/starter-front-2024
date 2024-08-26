import { render } from '@testing-library/react';
import CustomButton from './CustomButton';
import { getStyleByType } from './buttons';
import { describe, it, expect } from 'vitest';

vi.mock('./buttons');
describe('CustomButton component', () => {
   it('renders button with correct styles based on btnType prop', () => {
      vi.mocked(getStyleByType).mockReturnValue({});
      const btnType = 'PRIMARY';
      const buttonText = 'Click me';
      render(<CustomButton btnType={btnType}>{buttonText}</CustomButton>);
      expect(getStyleByType).toHaveBeenCalledWith(btnType);
   });
});
