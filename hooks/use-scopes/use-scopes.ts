import { useState } from 'react';

export const useScopes = (): [() => void, any, boolean, string] => {
  const [scopes, setScopes] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const getScopes = () => {
    setIsLoading(true);
    try {
      const data = [
        { name: 'teambit.base-ui', amount: '50' },
        { name: 'teambit.evangelist', amount: '40' },
        { name: 'teambit.evangelist', amount: '40' },
      ];
      setScopes(data);
      if (error) setError('');
      setIsLoading(false);
    } catch (err) {
      setError(err.toString());
      setIsLoading(false);
    }
  };
  return [getScopes, scopes, isLoading, error];
};
