import React from 'react';
import { render } from '@testing-library/react';
import { expect } from 'chai';
import { TopScopesExample } from './top-scopes.composition';

it('should render', () => {
  const { getByTestId } = render(<TopScopesExample />);
  const rendered = getByTestId('test-top-scopes-page');
  expect(rendered).to.exist;
});
