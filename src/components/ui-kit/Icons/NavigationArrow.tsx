import { FC } from "react";
import { IconProps } from "../../../types/types";

const NavigationArrow: FC<IconProps> = ({ viewBox = "0 0 24 24", width = "30", height = "30", className }) => {
  return (
    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox={viewBox} width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z" />
    </svg>
  );
};

export default NavigationArrow;
