import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface LinkTagProps extends DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode;
  size?: 'large' | 'normal' | 'small' | 'extraSmall' | 'extraSmall500';
  href?: string;
  tg?: '_blank';
}
