import React from "react";
import { HtagProps } from "./Htag.props";
import styles from './Htag.module.scss';

export const Htag: React.FC<HtagProps> = ({ tag, children }): JSX.Element => {
  switch (tag) {
    case 'h1': 
      return (
        <h1 className={styles.h1}>
          {children}
        </h1>
      );

    case 'h2': 
      return (
        <h2 className={`${styles.header} ${styles.h2}`}>
          {children}
        </h2>
      );

    case 'h3': 
      return (
        <h3 className={`${styles.header} ${styles.h3}`}>
          {children}
        </h3>
      );

    case 'h4': 
      return (
        <h4 className={`${styles.header} ${styles.h4}`}>
          {children}
        </h4>
      );

    case 'h5':
      return (
        <h5 className={`${styles.header} ${styles.h5}`}>
          {children}
        </h5>
      );

    case 'h6': 
      return (
        <h6 className={`${styles.header} ${styles.h6}`}>
          {children}
        </h6>
      );

    default: 
      return <></>;
  }
};
