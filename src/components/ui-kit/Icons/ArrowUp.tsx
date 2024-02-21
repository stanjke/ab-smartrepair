import { FC } from "react";
import { IconProps } from "../../../types/types";

const ArrowUp: FC<IconProps> = ({ viewBox = "0 0 24 24", width = "24", height = "24", className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={viewBox} className={className}>
      <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
    </svg>
  );
};

export default ArrowUp;
