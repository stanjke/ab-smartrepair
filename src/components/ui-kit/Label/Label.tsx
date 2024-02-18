import { FC } from "react";
import classnames from "classnames";

import { LabelTheme, LabelSize } from "./constants";

import styles from "./Label.module.scss";

interface Props {
  text: string;
  theme?: LabelTheme;
  size?: LabelSize;
  id?: string;
  onClick?: () => {};
}

const Label: FC<Props> = ({ text, onClick, id, theme = LabelTheme.DEFAULT, size = LabelSize.SMALL }) => {
  const className = classnames(styles.label, styles[`label--${theme}`], styles[`label--${size}`]);

  return (
    <span id={id} onClick={onClick} className={className}>
      {text}
    </span>
  );
};

export default Label;
