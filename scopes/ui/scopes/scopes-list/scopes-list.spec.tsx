import React from 'react';
import { render } from '@testing-library/react';
import { ScopeListExample } from './scopes-list.composition';

it('should render', () => {
  const { getByTestId } = render(<ScopeListExample />);
  const rendered = getByTestId('test-scope-list');
  expect(rendered).toBeTruthy();
});
