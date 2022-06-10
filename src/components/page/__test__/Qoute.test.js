import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Quote from '../Quote';

describe('Quotes Page Test suit', () => {
  it('should Print blockQuote to DOM', () => {
    render(<Quote />);
    const blockQuoteElement = screen.getByRole('blockquote');
    expect(blockQuoteElement).toBeInTheDocument();
  });
});
