import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import DefaultLayout from '../DefaultLayout';

const MockDefaultLayout = () => <Router><DefaultLayout>mockChild</DefaultLayout></Router>;

describe('Should render Default Layout components', () => {
  it('should render heading section', () => {
    render(<MockDefaultLayout />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
  });

  it('should render all the navigation links', () => {
    render(<MockDefaultLayout />);
    const listElements = screen.getAllByRole('link');
    expect(listElements.length).toBe(3);
  });
});
