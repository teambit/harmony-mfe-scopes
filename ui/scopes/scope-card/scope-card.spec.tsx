import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { ScopeCardExample } from './scope-card.composition';

it('should render', () => {
  const { getByTestId } = render(<ScopeCardExample />);
  const rendered = getByTestId('test-scope-card');
  expect(rendered).to.exist;
});
