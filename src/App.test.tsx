import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import Home from './Component/Home';

jest.mock('framer-motion', () => ({
  motion: new Proxy({}, {
    get: () => ({ children, initial, animate, exit, transition, whileInView, viewport, whileHover, ...props }: any) => (
      <div {...props}>{children}</div>
    ),
  }),
  AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}), { virtual: true });

test('renders the home hero heading', () => {
  render(<Home />);
  const heading = screen.getByRole('heading', {
    name: /plan flights, hotels, and bookings/i,
  });
  expect(heading).toBeInTheDocument();
});
