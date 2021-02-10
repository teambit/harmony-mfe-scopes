import React from 'react';
import {
  GqlServerProvider,
  useGqlServer,
} from '@teambit/base-ui.hooks.use-graphql-light';
import { useScopes } from './use-scopes';

export const Preview = () => {
  const [scopes, loading, error] = useScopes(['teambit']);
  const serverUrl = useGqlServer();

  if (error)
    return (
      <div>
        <div>(serverUrl: {serverUrl})</div>
        <br />
        <div>Error:</div>
        <br />
        <div>{error.toString()}</div>
      </div>
    );

  if (loading) return <div>loading...</div>;

  return (
    <div>
      <div>(serverUrl: {serverUrl})</div>
      <br />
      <div>Success!</div>
      <br />
      <div>{JSON.stringify(scopes)}</div>
    </div>
  );
};

export const WithExplicitContext = () => {
  return (
    <GqlServerProvider value="https://symphony.bit.dev/graphql">
      <Preview />
    </GqlServerProvider>
  );
};
