---
labels: ['react', 'typescript', 'ui', 'scope', 'list']
description: 'List of scope-card component.'
---

import { ScopeList } from './scopes-list';

Scope list example:

```js live
() => {
  const scopes = [
    { name: 'teambit.base-ui', amount: '50' },
    { name: 'teambit.evangelist', amount: '40' },
    { name: 'teambit.evangelist', amount: '40' },
  ];

  return <ScopeList list={scopes} />;
};
```
