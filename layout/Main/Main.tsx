import React from "react";
import { MainProps } from "./Main.props";
import styles from './Main.module.scss';

export const Main: React.FC<MainProps> = ({ children }): JSX.Element => {
  return ( 
    <main className={styles.main}>
      {children}
    </main>
  );
};
