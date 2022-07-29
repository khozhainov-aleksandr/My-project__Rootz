import React, { cloneElement } from "react";
import { useState, useEffect, Children } from "react";
import { CarouselProps } from "./Carousel.props";
import { Picture } from "../Picture";
import styles from './Carousel.module.scss';

interface Children {
  children: React.ReactNode;
  child: string;
}

export const Carousel: React.FC<CarouselProps> = ({ children }): JSX.Element => {
  const [pages, setPages] = useState<Children[]>([]);
  const [offset, setOffset] = useState<number>(0);

  const PAGE_WIDTH = 992;

  useEffect(() => {
    setPages(
      Children.map(children, child => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  function leftArrowClick() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
  }

  function rightArrowClick() {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  }

  return (
    <div className={styles.mainWrapper}>
      <Picture 
        className={styles.arrow}
        format="svg"
        imgName="arrow-left"
        altDes="Arrow Left"
        onClick={leftArrowClick}
      />

      <div className={styles.visibleArea}>
        <div 
          className={styles.allCardsWrapper}
          style={{transform: `translateX(${offset}px)`}}
        >
          {pages}
        </div>
      </div>

      <Picture 
        className={styles.arrow}
        format="svg"
        imgName="arrow-right"
        altDes="Arrow Right"
        onClick={rightArrowClick}
      />
    </div>
  );
};
