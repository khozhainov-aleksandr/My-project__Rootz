import React from "react";
import { Picture } from "../../components/Picture";
import { LinkTag } from "../../components/LinkTag";
import { Button } from "../../components/Button";
import styles from './Navigation.module.scss';

export const Navigation = (): JSX.Element => {
  return ( 
    <nav>
      <div className="container">
        <div className={styles.mainWrapper}>
          <Picture
            format="svg"
            imgName="logo_and_name"
            altDes="Logo company Rootz"
          />

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

          <Button appearance="notColored">
            Apply
          </Button>
        </div>
      </div>
    </nav>
  );
};
