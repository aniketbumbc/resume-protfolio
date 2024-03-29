import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

test('renders learn react link', () => {
  <BrowserRouter>
    render(
    <App />
    );
  </BrowserRouter>;
  const element = screen.getByTestId('route-element');
  expect(element).toBeInTheDocument();
});
