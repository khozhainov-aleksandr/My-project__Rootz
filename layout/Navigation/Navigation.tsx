import React from "react";
import { NavigationProps } from "./Navigation.props";
import { LinkTag } from "../../components/LinkTag";
import { Button } from "../../components/Button";
import styles from './Navigation.module.scss';
// import classNames from "classnames";

export const Navigation: React.FC<NavigationProps> = (): JSX.Element => {
  return ( 
    <nav>
      <div className="container">
        <div className={styles.mainWrapper}>
          <picture className={styles.mainLogo}>
            <source type="image/svg" />
            <img src="./logo_and_name.svg" alt="Logo company Rootz" />
          </picture>

          <ul className={styles.list}>
            <li className={styles.item}>
              <LinkTag href="#" size="normal">
                Home
              </LinkTag>
            </li>
            <li className={styles.item}>
              <LinkTag href="#" size="normal">
                Our&nbsp;mission
              </LinkTag>
            </li>
            <li className={styles.item}>
              <LinkTag href="#" size="normal">
                Places
              </LinkTag>
            </li>
            <li className={styles.item}>
              <LinkTag href="#" size="normal">
                Team
              </LinkTag>
            </li>
          </ul>

          <Button appearance="notColored">Apply</Button>
        </div>
      </div>
    </nav>
  );
};
