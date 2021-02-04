---
labels: ['react', 'hooks', 'scopes']
description: 'A React hooks to get scope data.'
---

import { useEffect } from 'react';
import { useScopes } from './use-scopes';

The hooks gives you the public scopes with most components.  
How to use:

```js live
() => {
  const scopes = useScopes(['teambit']);

  return <div>{JSON.stringify(scopes)}</div>;
};
```
