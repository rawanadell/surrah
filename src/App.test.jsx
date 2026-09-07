import { render, screen } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom'; 
import App from './App';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key,
    i18n: { changeLanguage: vi.fn() },
  }),
}));

describe('App Component in Surrah Project', () => {
  
  beforeEach(() => {
    window.history.pushState({}, 'Test page', '/');
  });

  it('renders the main page correctly', () => {
    render(<App />);
    
    const element = screen.getByText(/start_now/i); 
    
    expect(element).toBeInTheDocument();
  });
});