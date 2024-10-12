/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import DummyClientComponent from '#bazaar/components/main/DummyClientComponent';

describe('DummyClientComponent', () => {
  it('Renders a heading', () => {
    render(<DummyClientComponent />);

    const heading = screen.getByRole('heading', {
      name: 'Client'
    });

    expect(heading).toBeInTheDocument();
  });
});
