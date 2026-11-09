import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('should render the application', () => {
    render(<App />);

    expect(document.body).toBeTruthy();
  });
});
