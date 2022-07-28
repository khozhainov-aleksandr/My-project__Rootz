import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface NewsCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgType: 'svg' | 'png' | 'jpg',
  imgName: string,
  imgAlt: string,
  hashHref?: string,
  hashChildren: ReactNode,
  titleChildren: ReactNode,
  moreHref?: string;
  moreChildren?: ReactNode,
}
