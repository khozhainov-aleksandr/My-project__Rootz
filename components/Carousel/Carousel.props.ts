import { ReactElement, ReactNode } from "react";

export interface CarouselProps {
  children: ReactElement;
}

export interface PagesProps {
  props: {
    classCard: string;
    titleChildren: string;
    descChildren: string;
    style: {
      height: string;
      maxWidth: string;
      minWidth: string;
    }
  }
}