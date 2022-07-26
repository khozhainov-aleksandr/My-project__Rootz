import React from "react";
import { TagProps } from "./Tag.props";
import styles from './Ptag.module.scss';
import classNames from "classnames";

export const Tag: React.FC<TagProps> = ({ size, color, href, children, className, ...props }): JSX.Element => {
  const formatDiv = classNames(className, {
    [styles.small]: size === 'small',
    [styles.normal]: size === 'normal',
    [styles.large]: size === 'large',
  });

  return (
    <div className={formatDiv} {...props}>
      (href) 
      ? <a href={href}>{children}</a>
      : <>{children}</>
    </div>
  );
};
