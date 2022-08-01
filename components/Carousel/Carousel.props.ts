import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CarouselProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export interface PagesProps {
  // $$typeof?: Symbol(react.element)
  key: string;
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
  ref: null;
  // type: ƒ (param)
  // _owner: FiberNode {tag: 0, key: null, stateNode: null, elementType: ƒ, type: ƒ, …}
  // _store: {validated: false}
  // _self: undefined
  // _source: {fileName: '/Users/aleksandr/Documents/GitHub/Mate_Academy/My-…oject__Rootz/layout/CarouselCard/CarouselCard.tsx', lineNumber: 40, columnNumber: 15}
}
