import React from "react";
import { Htag } from "../../components/Htag";
import { Ptag } from "../../components/Ptag";
import { Picture } from "../../components/Picture";
import styles from './OurTeam.module.scss';

export const OurTeam = (): JSX.Element => {
  return (
    <div className={styles.ourTeam} id="team">
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.headerWrapper}>
            <Htag tag="h3">
              Our top team
            </Htag>

            <Ptag size="normal">
              Learn more about how you can save our planet&apos;s nature.
            </Ptag>
          </div>

          <div className={styles.pictureWrapper}>
            <Picture
              className={styles.portrait}
              format="png"
              imgName="team_1"
              altDes="Portrait of a guy"
            />

            <Picture
              className={`${styles.dotLine} ${styles.firstLine}`}
              format="svg"
              imgName="dottedLine"
              altDes="Dotted Line"
            />

            <Picture
              className={styles.portrait}
              format="png"
              imgName="team_2"
              altDes="Portrait of a girl"
            />

            <Picture
              className={`${styles.dotLine} ${styles.secondLine}`}
              format="svg"
              imgName="dottedLine"
              altDes="Dotted Line"
            />

            <Picture
                className={styles.portrait}
              format="png"
              imgName="team_3"
              altDes="Portrait of a guy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
