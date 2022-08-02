import React from "react";
import { ChallengesProps } from "./Challenges.props";
import { Htag } from "../../components/Htag";
import { Ptag } from "../../components/Ptag";
import { Picture } from "../../components/Picture";
import styles from './Challenges.module.scss';

export const Challenges: React.FC<ChallengesProps> = (): JSX.Element => {
  return (
    <div className={styles.challenges}>
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.titleWrapper}>
            <Htag tag="h2" >
              The scale of the challenges facing our planet can seem daunting,
              but we can all do something.
            </Htag>
          </div>

          <div className={styles.additionalContent}>
            <div className={styles.contentItem}>
              <Picture
                format="svg"
                imgName="challenges_user"
                altDes="User icon"
              />
              <Ptag size="extraSmall">
                Assets value COMPOSer
              </Ptag>
            </div>

            <div className={styles.contentItem}>
              <Picture
                format="svg"
                imgName="challenges_graph"
                altDes="Graph icon"
              />
              <Ptag size="extraSmall">
                GRAPH BUDGET ANALYZER
              </Ptag>
            </div>

            <div className={styles.contentItem}>
              <Picture
                format="svg"
                imgName="challenges_apparatus"
                altDes="Apparatus icon"
              />
              <Ptag size="extraSmall">
                MONTHLY AVG. REVENUE
              </Ptag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
