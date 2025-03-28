import { FC, SVGProps } from "react";

export interface ILink {
  id: number;
  label?: string;
  href: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
}
