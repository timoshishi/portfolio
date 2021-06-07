import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { lightTheme } from './themesMock';
import { cardInfo } from './cardInfoMock';

it('renders child text introduction', () => {
  const theme = lightTheme;
  render(<Card cardInfo={cardInfo} theme={theme} />);
  expect(screen.getByText('Design')).toBeInTheDocument();
});
it('renders child text introduction', () => {
  const theme = lightTheme;
  render(<Card cardInfo={cardInfo} theme={theme} />);
  expect(screen.queryByText('bad man')).toBeFalsy();
});
