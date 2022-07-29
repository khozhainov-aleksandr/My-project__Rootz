import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface CarouselProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

export interface ChildrenProps {
  child?: string;
  children?: React.ReactNode;
}

export interface ChildProps {
  height: string;
  minWidth: string;
  maxWidth: string;
}
