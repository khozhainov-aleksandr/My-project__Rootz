import React from "react";
import { CardProps } from "./Card.props";
import { Htag } from "../Htag";
import { Ptag } from "../Ptag";
import { Picture } from "../Picture";
import styles from './Card.module.scss';

export const Card: React.FC<CardProps> = ({ classCard, titleChildren, descChildren }): JSX.Element => {
  return (
    <div className={`${styles.card} ${classCard}`}>
      <div className={styles.descriptionWrapper}>
        <Htag tag="h3">
          {titleChildren}
        </Htag>
        <Ptag size="large">
          {descChildren}
        </Ptag>
      </div>
      <Picture
        format="svg"
        imgName="void"
        altDes="Void section for phone"
      />
    </div>
  );
};
