import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../src/components/Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { asFragment } = render(<Header title="test title" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
