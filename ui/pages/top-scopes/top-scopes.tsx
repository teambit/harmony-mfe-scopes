import React, { useEffect } from 'react';
import classNames from 'classnames';
import { LoaderRibbon } from '@teambit/base-ui.loaders.loader-ribbon';
import { Error } from '@teambit/base-ui.input.error';
import { Header } from '@harmony-mfe/scopes.ui.top-scopes.header';
import { ScopeList } from '@harmony-mfe/scopes.ui.scopes.scopes-list';
import { capitalize } from '@harmony-mfe/toolbox.string.capitalize';
import { useScopes } from '@harmony-mfe/scopes.hooks.use-scopes';
import styles from './top-scopes.module.scss';

export type TopScopesProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const TopScopes = ({ className, ...rest }: TopScopesProps) => {
  const [getScopes, scopes, isLoading, error] = useScopes();

  useEffect(() => {
    getScopes();
  }, []);

  return (
    <div className={classNames(styles.topScopes, classNames)} {...rest}>
      <Header
        title={capitalize(`top ${10} public scopes`)}
        description={capitalize(
          'these are the public scopes with most components'
        )}
      />
      <LoaderRibbon active={isLoading} />
      {error !== '' ? <Error>{error}</Error> : <ScopeList list={scopes} />}
    </div>
  );
};
