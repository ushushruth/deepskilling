import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const element = screen.getByText(/Blog Details/i);
  expect(element).toBeInTheDocument();
});
