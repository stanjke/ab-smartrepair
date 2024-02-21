import { FC } from "react";
import { IconProps } from "../../../types/types";

const ArrowRight: FC<IconProps> = ({ viewBox = "0 0 24 24", width = "30", height = "30", className }) => {
  return (
    <svg clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox={viewBox} width={width} height={height} className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
        fillRule="nonzero"
      />
    </svg>
  );
};

export default ArrowRight;
