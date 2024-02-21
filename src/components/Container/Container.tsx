import { ReactNode } from "react";
import classNames from "classnames";
import "./Container.scss";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
  return <div className={classNames("custom-container", className)}>{children}</div>;
};

export default Container;
