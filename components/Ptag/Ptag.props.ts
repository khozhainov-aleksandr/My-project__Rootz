import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface PtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size: 'large' | 'normal' | 'normalOps'| 'extraSmall' | 'small';
  claNam?: string;
  children: ReactNode;
}