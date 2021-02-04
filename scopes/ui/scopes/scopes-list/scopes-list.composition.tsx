import React from 'react';
import { ScopeList } from './scopes-list';
import { mockScopeDescriptor } from '@harmony-mfe/scopes.scope-descriptor';

const scopes = [
  mockScopeDescriptor({ id: { scopeName: 'ripple-ci', owner: 'teambit' } }),
  mockScopeDescriptor({ id: { scopeName: 'base-ui', owner: 'teambit' } }),
  mockScopeDescriptor({ id: { scopeName: 'people', owner: 'teambit' } }),
];

export const ScopeListExample = () => (
  <ScopeList list={scopes} data-testid="test-scope-list" />
);
