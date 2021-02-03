import { useState } from 'react';

export const useScopes = (): [Promise<void>, any, boolean, string] => {
  const [scopes, setScopes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getScopes = async () => {
    setIsLoading(true);
    try {
      // NEED TO ADD AWAIT

      const scopes = [
        { name: 'teambit.base-ui', amount: '50' },
        { name: 'teambit.evangelist', amount: '40' },
        { name: 'teambit.evangelist', amount: '40' },
      ];
      setScopes(scopes);
      if (error) setError('');
      setIsLoading(false);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };
  // @ts-ignore
  return [getScopes, scopes, isLoading, error];
};
