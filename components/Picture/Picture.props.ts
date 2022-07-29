import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface PictureProps extends DetailedHTMLProps<HTMLAttributes<HTMLPictureElement>, HTMLPictureElement> {
  format: 'svg' | 'png' | 'jpg';
  imgName: string;
  altDes: string;
}
