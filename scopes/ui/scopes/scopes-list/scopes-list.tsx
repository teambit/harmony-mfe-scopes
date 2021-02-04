import React from 'react';
import classNames from 'classnames';
import { ScopeCard, ScopeCardProps } from '@harmony-mfe/scopes.ui.scopes.scope-card';
import styles from './scopes-list.module.scss';
import { ScopeDescriptor } from '@harmony-mfe/scopes.scope-descriptor';

export type ScopeListProps = {
  /**
   * list of scopes
   */
  list: Array<ScopeDescriptor>;
} & React.HTMLAttributes<HTMLDivElement>;

export const ScopeList = ({ list, className, ...rest }: ScopeListProps) => {
  return (
    <div className={classNames(styles.scopeList, className)} {...rest}>
      {list.length > 0 &&
        list.map((scope, index) => (
          <ScopeCard key={index} name={scope.id.toString()} amount={scope.componentCount.toString()} />
        ))}
    </div>
  );
};
