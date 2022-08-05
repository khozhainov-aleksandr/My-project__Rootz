import React from "react";
import { NewsCard } from "../../components/NewsCard";
import styles from './NewsSection.module.scss';

export const NewsSection = (): JSX.Element => {
  return ( 
    <div className={styles.news}>
      <div className="container">
        <div className={styles.mainWrapper}>
          <NewsCard
            imgType="png"
            imgName="news_pic_1"
            imgAlt="Portrait of a girl in a hat"
            hashChildren="Stories"
            titleChildren="Travel In Japan: The True Experience"
          />

          <NewsCard
            imgType="jpg"
            imgName="news_pic_2"
            imgAlt="Smiling man with glasses"
            hashChildren="VideoTutor"
            titleChildren="Helping Wild Turtles"
          />

          <NewsCard
            imgType="png"
            imgName="news_pic_3"
            imgAlt="Bridge over the sea"
            hashChildren="Photostory"
            titleChildren="Threats of Industrial World"
          />
        </div>
      </div>
    </div>
  );
};
