import { useMemo } from 'react';
import { ScopeDescriptor } from '@harmony-mfe/scopes.scope-descriptor';
import { useGqlRequest } from '@harmony-mfe/scopes.ui.hooks.use-graphql-query';
import { gql } from 'graphql-request';

const SEARCH_SCOPES = gql`
  query SearchScopes($owners: [String]) {
    searchScopes(queryString: "", options: { owners: $owners }) {
      id {
        scopeName
        owner
      }
      description
      componentCount
    }
  }
`;

export function useScopes(owners?: string[]) {
  const variables = useMemo(
    () => ({
      owners,
    }),
    [owners]
  );
  const { data, loading, error } = useGqlRequest(SEARCH_SCOPES, {
    variables,
  });

  if (!data?.searchScopes) return [undefined, loading, error];

  const scopes = data.searchScopes.map((plainDescriptor: any) => {
    return ScopeDescriptor.fromObject(plainDescriptor);
  });
  return [scopes, loading, error];
}
