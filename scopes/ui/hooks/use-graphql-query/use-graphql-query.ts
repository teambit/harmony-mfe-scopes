import { useEffect, useState, useContext } from 'react';
import { request } from 'graphql-request';
import { gqlContext } from '@harmony-mfe/scopes.ui.graphql-context';

export type UseGqlRequestProps = {
  variables?: Record<string, any>;
};

export function useGqlRequest<T = any>(
  query: string,
  { variables }: UseGqlRequestProps
) {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);

  const server = useContext(gqlContext);

  useEffect(() => {
    setLoading(true);

    request(server, query, variables)
      .then((result: T) => {
        setData(result);
        setLoading(false);
      })
      .catch((e) => {
        console.log('e', e);
        setError(e);
        setLoading(false);
      });
  }, [query, variables]);

  return { data, loading, error };
}
