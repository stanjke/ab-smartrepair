import { FC, MouseEvent } from "react";
import classnames from "classnames";

import { LabelTheme, LabelSize } from "./constants";

import "./Label.scss";
import Cancel from "../Icons/Cancel";

interface Props {
  text: string;
  theme?: LabelTheme;
  size?: LabelSize;
  id?: string;
  onClick?: (event: MouseEvent<HTMLSpanElement>) => void;
}

const Label: FC<Props> = ({ text, onClick, id, theme = LabelTheme.DEFAULT, size = LabelSize.SMALL }) => {
  const className = classnames("label", `label--${theme}`, `label--${size}`);

  return (
    <span id={id} onClick={onClick} className={className}>
      {text}
      <Cancel className={"label__icon"} width="12" height="12" />
    </span>
  );
};

export default Label;
