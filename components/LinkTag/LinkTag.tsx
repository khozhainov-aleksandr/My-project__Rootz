import React from "react";
import { LinkTagProps } from "./LinkTag.props";
import styles from './LinkTag.module.scss';
import classNames from "classnames";

export const LinkTag: React.FC<LinkTagProps> = ({ size, href, tg, children, className, ...props }): JSX.Element => {
  const formatLink = classNames(styles.a, className, {
    [styles.extraSmall500]: size === 'extraSmall500',
    [styles.extraSmall]: size === 'extraSmall',
    [styles.small]: size === 'small',
    [styles.normal]: size === 'normal',
    [styles.large]: size === 'large',
  });

  return (
    <a className={formatLink} href={href} {...props} target={tg}>
      {children}
    </a>
  );
};
