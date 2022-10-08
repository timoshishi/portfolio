import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutText from '../About/AboutText';

it('renders name introduction', () => {
  render(<AboutText />);
  expect(screen.getByText("hello, i'm tim. it's nice to meet you")).toBeInTheDocument();
});
it('renders about paragraph', () => {
  render(<AboutText />);
  expect(
    screen.getByText(
      'I am a software engineer who prefers spaces over tabs, Vim over Emacs and clean, reusable code. I work in JavaScript, Node, TypeScript and a three piece suit. Before embarking on my journey as a Software Engineer I was a chef, business owner and peripatetic lover of local cuisine.'
    )
  ).toBeInTheDocument();
});
