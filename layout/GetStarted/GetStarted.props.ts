import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface GetStartedProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export interface Data {
  id: string;
  title: string;
  description: string;
}