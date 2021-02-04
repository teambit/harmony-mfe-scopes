---
labels: ['react', 'typescript', 'ui', 'scope', 'list']
description: 'List of scope-card component.'
---

import { ScopeList } from './scopes-list';
import { mockScopeDescriptor } from '@harmony-mfe/scopes.scope-descriptor';

Scope list example:

```js live
() => {
  const scopes = [
    mockScopeDescriptor({ id: { scopeName: 'ripple-ci', owner: 'teambit' } }),
    mockScopeDescriptor({ id: { scopeName: 'base-ui', owner: 'teambit' } }),
    mockScopeDescriptor({ id: { scopeName: 'people', owner: 'teambit' } }),
  ];

  return <ScopeList list={scopes} />;
};
```
