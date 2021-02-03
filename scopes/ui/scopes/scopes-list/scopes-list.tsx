import React from 'react';
import classNames from 'classnames';
import { ScopeCard, ScopeCardProps } from '@harmony-mfe/scopes.ui.scopes.scope-card';
import styles from './scopes-list.module.scss';

export type ScopeListProps = {
  /**
   * list of scopes
   */
  list: Array<ScopeCardProps>;
} & React.HTMLAttributes<HTMLDivElement>;

export const ScopeList = ({ list, className, ...rest }: ScopeListProps) => {
  return (
    <div className={classNames(styles.scopeList, className)} {...rest}>
      {list.length > 0 &&
        list.map((scope, index) => (
          <ScopeCard key={index} name={scope.name} amount={scope.amount} />
        ))}
    </div>
  );
};
