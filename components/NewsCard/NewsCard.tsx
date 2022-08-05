import React from "react";
import { NewsCardProps } from "./NewsCard.props";
import { LinkTag } from "../LinkTag";
import { Htag } from "../Htag";
import styles from './NewsCard.module.scss';
import { Picture } from "../Picture";

export const NewsCard: React.FC<NewsCardProps> = ({
  imgType,
  imgName,
  imgAlt,
  hashHref = '#',
  hashChildren,
  titleChildren,
  moreHref = '#',
  moreChildren = 'see more'
}): JSX.Element => {
  return (
    <div className={styles.newsWrapper}>
      <Picture
        format={imgType}
        imgName={imgName}
        altDes={imgAlt}
      />

      <div className={styles.descriptionWrapper}>
        <LinkTag size="extraSmall500" href={hashHref}>
          <span className={styles.hashtagLink}>#</span>
          {hashChildren}
        </LinkTag>

        <Htag tag="h6">
          {titleChildren}
        </Htag>

        <LinkTag size="extraSmall" href={moreHref}>
          {moreChildren}
        </LinkTag>
      </div>
    </div>
  );
};
