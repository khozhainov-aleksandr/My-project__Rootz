import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface HtagProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3'| 'h4' | 'h4_upper' | 'h5' | 'h6' | 'h6_normal' | 'h6_large';
  children: ReactNode;
}
