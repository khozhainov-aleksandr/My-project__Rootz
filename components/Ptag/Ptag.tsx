import React from "react";
import { PtagProps } from "./Ptag.props";
import styles from './Ptag.module.scss';
import classNames from "classnames";

export const Ptag: React.FC<PtagProps> = ({ size, children, claNam, ...props }): JSX.Element => {
  const formatParagraph = classNames(styles.p, claNam, {
    [styles.large]: size === 'large',
    [styles.normal]: size === 'normal',
    [styles.normalOps]: size === 'normalOps',
    [styles.extraSmall]: size === 'extraSmall',
    [styles.small]: size === 'small',
  });

  return (
    <p className={formatParagraph} {...props}>
      {children}
    </p>
  );
};
