import { useEffect, useState, useContext } from 'react';
import { GraphQLClient } from 'graphql-request';
import { gqlContext } from '@harmony-mfe/scopes.ui.graphql-context';

export type UseGqlRequestProps = {
  variables?: Record<string, any>;
};

export function useGqlRequest<T = any>(
  query: string,
  { variables }: UseGqlRequestProps,
  method?: string
) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const server = useContext(gqlContext);
  console.log('server', server);
  const client = new GraphQLClient(server, { method });

  useEffect(() => {
    setLoading(true);

    client
      .request(query, variables)
      .then((result: T) => {
        setData(result);
        setLoading(false);
      })
      .catch((e) => {
        setError(e);
        setLoading(false);
      });
  }, [query, variables]);

  return { data, loading, error };
}
