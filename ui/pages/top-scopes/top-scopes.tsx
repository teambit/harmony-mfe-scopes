import React from 'react';
import classNames from 'classnames';
import { Header } from '@mfe/scopes.ui.top-scopes.header';
import { ScopeList } from '@mfe/scopes.ui.scopes.scopes-list';
import { capitalize } from '@mfe/toolbox.string.capitalize';
import styles from './top-scopes.module.scss';

export type TopScopesProps = {} & React.HTMLAttributes<HTMLDivElement>;

export const TopScopes = ({ className, ...rest }: TopScopesProps) => {
  const scopes = [
    { name: 'teambit.base-ui', amount: '50' },
    { name: 'teambit.evangelist', amount: '40' },
    { name: 'teambit.evangelist', amount: '40' },
  ];

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
