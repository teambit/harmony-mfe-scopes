import React, { useEffect } from 'react';
import classNames from 'classnames';
import { LoaderRibbon } from '@teambit/base-ui.loaders.loader-ribbon';
import { Header } from '@mfe/scopes.ui.top-scopes.header';
import { ScopeList } from '@mfe/scopes.ui.scopes.scopes-list';
import { capitalize } from '@mfe/toolbox.string.capitalize';
import { useScopes } from '@mfe/scopes.hooks.use-scopes';
import styles from './top-scopes.module.scss';

export type TopScopesProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const TopScopes = ({ className, ...rest }: TopScopesProps) => {
  const [getScopes, scopes, isLoading, error] = useScopes();

  // useEffect(() => {
  //   getScopes();
  // }, []);

  return (
    <div className={classNames(styles.topScopes, classNames)} {...rest}>
      <Header
        title={capitalize(`top ${10} public scopes`)}
        description={capitalize(
          'these are the public scopes with most components'
        )}
      />
      <LoaderRibbon active={isLoading} />
      <ScopeList list={scopes} />
    </div>
  );
};
