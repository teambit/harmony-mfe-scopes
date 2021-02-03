import React from 'react';
import classNames from 'classnames';
import { Label } from '@teambit/base-ui.elements.label';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { Card } from '@teambit/base-ui.surfaces.card';
import styles from './scope-card.module.scss';

export type ScopeCardProps = {
  /**
   * scope name
   */
  name: string;
  /**
   * amount of components in scope
   */
  amount: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const ScopeCard = ({
  name,
  amount,
  className,
  ...rest
}: ScopeCardProps) => {
  return (
    <Card className={classNames(styles.scopeCard, className)} {...rest}>
      <Paragraph element="span" className={styles.scopeName}>
        {name}
      </Paragraph>
      <Label>{amount}</Label>
    </Card>
  );
};
