import React from "react";
import { HeaderProps } from "./Header.props";
import { Htag } from "../../components/Htag";
import { Ptag } from "../../components/Ptag";
import { Button } from "../../components/Button";
import styles from './Header.module.scss';

export const Header: React.FC<HeaderProps> = ({ children }): JSX.Element => {
  return ( 
    <header className={styles.header}>
      {children}
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.textWrapper}>
            <Htag tag="h1">Nature needs you</Htag>

            <picture>
              <source type="image/svg" />
              <img
                className={styles.imgNature}
                src="./signature_on_header.svg"
                alt="Nature needs you"
              />
            </picture>

            <Ptag size="normal" className={styles.description}>
              The scale of the challenges facing our planet can seem daunting, but we can all do something.
            </Ptag>

            <form className={styles.findPlaceForm} action="#">
              <picture className={styles.findPlaceImg}>
                <source type="image/svg" />
                <img src="./locationPlace.svg" alt="Location the place" />
              </picture>

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
          <picture>
              <source type="image/svg"/>
              <img
                src="./parrot.svg"
                alt="Colored Parrot"
              />
            </picture>

            <picture className={styles.parrotCardWrapper}>
              <source type="image/svg" />
              <img
                src="./parrot-card.svg"
                alt="Parrot card"
              />
            </picture>
          </div>
        </div>
      </div>
    </header>
  );
};
