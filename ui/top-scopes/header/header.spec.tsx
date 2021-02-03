import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { HeaderExample } from './header.composition';

it('should render', () => {
  const { getByTestId } = render(<HeaderExample />);
  const rendered = getByTestId('test-header');
  expect(rendered).to.exist;
});
