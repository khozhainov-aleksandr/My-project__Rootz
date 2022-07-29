import React from "react";
import { PictureProps } from "./Picture.props";
// import styles from './Picture.module.scss';

export const Picture: React.FC<PictureProps> = ({ format, imgName, altDes, ...props }): JSX.Element => {
  return (
    <picture {...props}>
      <source type={`image/${format}`}/>
      <img src={`./${imgName}.${format}`} alt={altDes}/>
    </picture>
  );
};
