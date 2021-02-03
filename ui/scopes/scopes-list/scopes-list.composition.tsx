import React from 'react';
import { ScopeList } from './scopes-list';

const scopes = [
  { name: 'teambit.base-ui', amount: '50' },
  { name: 'teambit.evangelist', amount: '40' },
  { name: 'teambit.evangelist', amount: '40' },
];

export const ScopeListExample = () => (
  <ScopeList list={scopes} data-testid="test-scope-list" />
);
