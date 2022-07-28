import React from "react";
import { NewsSectionProps } from "./NewsSection.props";
import { LinkTag } from "../../components/LinkTag";
import { Htag } from "../../components/Htag";
import styles from './NewsSection.module.scss';

export const NewsSection: React.FC<NewsSectionProps> = (): JSX.Element => {
  return ( 
    <div className={styles.news}>
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.newsWrapper}>
            <picture className={styles.img}>
              <source type="image/png"/>
              <img src="./news_pic_1.png" alt="Portrait of a girl in a hat"/>
            </picture>
            <div className={styles.descriptionWrapper}>
              <LinkTag size="extraSmall500" href="#">
                <span className={styles.hashtagLink}>#</span>
                Stories
              </LinkTag>

              <Htag tag="h6">
                Travel In Japan: The True Experience
              </Htag>

              <LinkTag size="extraSmall" href="#">
                see more
              </LinkTag>
            </div>
          </div>

          <div className={styles.newsWrapper}>
            <picture className={styles.img}>
              <source type="image/jpg"/>
              <img src="./news_pic_2.jpg" alt="Smiling man with glasses"/>
            </picture>
            <div className={styles.descriptionWrapper}>
              <LinkTag size="extraSmall500" href="#">
                <span className={styles.hashtagLink}>#</span>
                VideoTutor
              </LinkTag>

              <Htag tag="h6">
                Helping Wild Turtles
              </Htag>

              <LinkTag size="extraSmall" href="#">
                see more
              </LinkTag>
            </div>
          </div>

          <div className={styles.newsWrapper}>
            <picture className={styles.img}>
              <source type="image/png"/>
              <img src="./news_pic_3.png" alt="Bridge over the sea"/>
            </picture>
            <div className={styles.descriptionWrapper}>
              <LinkTag size="extraSmall500" href="#">
                <span className={styles.hashtagLink}>#</span>
                Photostory
              </LinkTag>

              <Htag tag="h6">
                Threats of Industrial World
              </Htag>

              <LinkTag size="extraSmall" href="#">
                see more
              </LinkTag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
