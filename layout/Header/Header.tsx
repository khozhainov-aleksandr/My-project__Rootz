import React, { useState } from "react";
import { HeaderProps } from "./Header.props";
import { Htag } from "../../components/Htag";
import { Picture } from "../../components/Picture";
import { Ptag } from "../../components/Ptag";
import { Button } from "../../components/Button";
import styles from './Header.module.scss';

export const Header: React.FC<HeaderProps> = ({ children }): JSX.Element => {
  const [counterCard, setCounterCard] = useState<string>('29 128');

  return ( 
    <header className={styles.header}>
      {children}
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.textWrapper}>
            <Htag tag="h1">Nature needs you</Htag>

            <Picture
              format="svg"
              imgName="signature_on_header"
              altDes="Nature needs you"
            />

            <Ptag size="normal" className={styles.description}>
              The scale of the challenges facing our planet can seem
              daunting, but we can all do something.
            </Ptag>

            <form className={styles.findPlaceForm} action="#">
              <Picture
                format="svg"
                imgName="locationPlace"
                altDes="Location the place"
              />

              <input
                className={styles.findPlaceInput}
                type="text"
                name="FindPlace"
                placeholder="Find the place to help"
              />

              <div className={styles.findPlaceButton}>
                <Button
                  type="submit"
                  appearance="colored"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>

          <div className={styles.pictureWrapper}>
            <Picture
              format="svg"
              imgName="parrot"
              altDes="Colored Parrot"
            />

            <div className={styles.parrotCardWrapper}>
              <Picture
                format="svg"
                imgName="parrot-card"
                altDes="Parrot card"
              />

              <span className={styles.titleCard}>Members</span>
              <span className={styles.counterCard}>{counterCard}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
