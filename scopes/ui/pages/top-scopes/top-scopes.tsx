import React, { useEffect } from 'react';
import classNames from 'classnames';
import { LoaderRibbon } from '@teambit/base-ui.loaders.loader-ribbon';
import { Error } from '@teambit/base-ui.input.error';
import { Header } from '@harmony-mfe/scopes.ui.top-scopes.header';
import { ScopeList } from '@harmony-mfe/scopes.ui.scopes.scopes-list';
import { capitalize } from '@harmony-mfe/toolbox.string.capitalize';
import { useScopes } from '@harmony-mfe/scopes.ui.hooks.use-scopes';
import styles from './top-scopes.module.scss';

export type TopScopesProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const TopScopes = ({ className, ...rest }: TopScopesProps) => {
  const scopes = useScopes(['teambit']);
  if (!scopes.length) return <LoaderRibbon active={true} />

  return (
    <div className={classNames(styles.topScopes, classNames)} {...rest}>
      <Header
        title={capitalize(`top ${10} public scopes`)}
        description={capitalize(
          'these are the public scopes with most components'
        )}
      />
      <ScopeList list={scopes} />
    </div>
  );
};
