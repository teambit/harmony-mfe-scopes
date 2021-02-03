import React from 'react';
import classNames from 'classnames';
import { Heading } from '@teambit/base-ui.text.heading';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import styles from './header.module.scss';

export type HeaderProps = {
  /**
   * header title
   */
  title: string;
  /**
   * description title
   */
  description?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export const Header = ({
  title,
  description,
  className,
  ...rest
}: HeaderProps) => {
  return (
    <div className={classNames(styles.header, className)} {...rest}>
      <Heading className={styles.title}>{title}</Heading>
      <Paragraph element="div" className={styles.description}>
        {description}
      </Paragraph>
    </div>
  );
};
