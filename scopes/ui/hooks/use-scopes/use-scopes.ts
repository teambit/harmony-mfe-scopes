import { useDataQuery } from '@teambit/ui';
import { ScopeDescriptor } from '@harmony-mfe/scopes.scope-descriptor';
import gql from 'graphql-tag';

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
  const { data, loading } = useDataQuery(SEARCH_SCOPES, {
    variables: {
      owners: owners
    }
  });

  if (!data?.searchScopes) return [];

  return data.searchScopes.map((plainDescriptor: any) => {
    return ScopeDescriptor.fromObject(plainDescriptor);
  });
};
