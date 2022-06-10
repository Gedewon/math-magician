import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../Home';

describe('Home Page Test suit', () => {
  it('should Print an article to the Dom', () => {
    render(<Home />);
    const articleElement = screen.getByRole('article');
    expect(articleElement).toBeInTheDocument();
  });

  it('it should have a heading with welcome message', () => {
    render(<Home />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('Welcome to our page!');
  });
});
