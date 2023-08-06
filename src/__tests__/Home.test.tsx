import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from 'pages/home/Home';

test('home', () => {
   render(<Home />);
   const balanceDiv = screen.getByText('Balance: 0');
   expect(balanceDiv).toBeDefined();

   const rockButton = screen.getByRole('button', { name: 'ROCK' });
   expect(rockButton).toBeEnabled();

   const paperButton = screen.getByRole('button', { name: 'PAPER' });
   expect(paperButton).toBeEnabled();

   const scissorsButton = screen.getByRole('button', { name: 'SCISSORS' });
   expect(scissorsButton).toBeEnabled();

   const playButton = screen.getByRole('button', { name: 'PLAY' });
   expect(playButton).toBeDisabled();

   const decButtons = screen.getAllByRole('button', { name: '-' });
   expect(decButtons).toBeDefined();

   const incButtons = screen.getAllByRole('button', { name: '+' });
   expect(incButtons).toBeDefined();
});
