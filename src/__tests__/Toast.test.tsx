import { render, screen } from '@testing-library/react';
import Toast from 'components/Toast';

describe('Toast', () => {
   it('renders success message', () => {
      render(<Toast type="success" message="Success" callBack={() => ''} />);
      const headline = screen.getByTestId('toast-success');
      expect(headline).toBeInTheDocument();
   });

   it('renders error message', () => {
      render(<Toast type="error" message="Error" callBack={() => ''} />);
      const headline = screen.getByTestId('toast-danger');
      expect(headline).toBeInTheDocument();
   });
});
