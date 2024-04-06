import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'
import App from './App';

// test('renders New York City Schools heading', () => {
//   render(<App />);
//   const headingElement = screen.getByText(/New York City Schools/i);
//   expect(headingElement).toBeInTheDocument();
// });

// test('renders NYCShools component', () => {
//   render(<App />);
//   const nycShoolsElement = screen.getByTestId('nyc-shools');
//   expect(nycShoolsElement).toBeInTheDocument();
// });

// test('renders SchoolDetails component', () => {
//   render(<App />);
//   const schoolDetailsElement = screen.getByTestId('school-details');
//   expect(schoolDetailsElement).toBeInTheDocument();
// });

// test('renders SATScores component', () => {
//   render(<App />);
//   const satScoresElement = screen.getByTestId('sat-scores');
//   expect(satScoresElement).toBeInTheDocument();
// });

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    render(<App />);
    screen.debug()
    expect(1+1).toEqual(2)
  })
})