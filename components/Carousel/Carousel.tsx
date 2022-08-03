import React, { cloneElement } from "react";
import { useState, useEffect, Children } from "react";
import { CarouselProps, PagesProps } from "./Carousel.props";
import { Card } from "../Card";
import { Picture } from "../Picture";
import styles from './Carousel.module.scss';

export const Carousel: React.FC<CarouselProps> = ({ children }): JSX.Element => {
  const [pages, setPages] = useState<PagesProps[]>([]);
  const [offset, setOffset] = useState<number>(0);

  console.log(pages);

  const PAGE_WIDTH = 992;

  const childrenElement = Children.map(children, child => {
    if (child.type === Card) {
      return cloneElement(child, {
        style: {
          height: '100%',
          minWidth: `${PAGE_WIDTH}px`,
          maxWidth: `${PAGE_WIDTH}px`,
        },
      });
    }
  });

  useEffect(() => {
    setPages(childrenElement);
  }, []);

  console.log(pages);

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
          {
            pages?.map((child, id) =>(
              <React.Fragment key={id}>
                {child}
              </React.Fragment>
            ))
          }

          {/* {pages} */}
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
