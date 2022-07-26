import React from "react";
import { ButtonProps } from "./Button.props";
import styles from './Button.module.scss';
import classNames from "classnames";

export const Button: React.FC<ButtonProps> = ({ appearance, children, ...props }): JSX.Element => {
  const formatButton = classNames(styles.button, {
    [styles.colored]: appearance === 'colored',
    [styles.notColored]: appearance === 'notColored',
    [styles.round]: appearance === 'round',
    [styles.round__plus]: appearance === 'round',
    // [styles.round__minus]: appearance === 'round',
  });

    console.log(formatButton);

  return (
    <button
      type="button"
      className={formatButton}
      {...props}
    >
      {children}
    </button>
  );
};
