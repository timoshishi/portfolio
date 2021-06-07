import { render, screen } from '@testing-library/react';
import Button from '../Layout/Button';

it('renders child text introduction', () => {
  render(<Button>ClickHere</Button>);
  expect(screen.queryByText('ClickHere')).toBeTruthy();
  expect(screen.getByText('ClickHere')).toBeInTheDocument();
});
it('does not render text not given to it', () => {
  render(<Button>ClickHere</Button>);
  const hello = screen.queryByText('Hello');
  console.log({ hello });
  expect(hello).toBeFalsy();
});
