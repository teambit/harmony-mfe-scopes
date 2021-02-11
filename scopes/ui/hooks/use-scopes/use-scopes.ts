import { gql } from 'graphql-request';
import { useGqlRequest } from '@teambit/base-ui.hooks.use-graphql-light';
import { ScopeDescriptor } from '@harmony-mfe/scopes.scope-descriptor';

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

export function useScopes(owners: string[]) {
  const variables = {
    owners,
  };
  const server = 'https://symphony.bit.dev/graphql';
  const { data, loading, error } = useGqlRequest(SEARCH_SCOPES, {
    variables,
    server,
  });

  if (!data?.searchScopes) return [undefined, loading, error];

  const scopes = data.searchScopes.map((plainDescriptor: any) => {
    return ScopeDescriptor.fromObject(plainDescriptor);
  });
  return [scopes, loading, error];
}
