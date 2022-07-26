import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LinkTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode;
  size?: 'large' | 'normal' | 'small';
  color?: 'main' | 'secondary';
  href?: string;
}