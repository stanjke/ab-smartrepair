import { FC } from "react";
import { IconProps } from "../../../types/types";

const SortIcon: FC<IconProps> = ({ viewBox = "0 0 24 24", width = "24", height = "24", className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} className={className}>
      <path d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 14h-8v-2h8v2zm2 2h-10v2h10v-2zm-4-8h-6v2h6v-2zm-2-4h-4v2h4v-2zm-2-4h-2v2h2v-2z" />
    </svg>
  );
};

export default SortIcon;