import { ReactNode } from "react";
import classNames from "classnames";
import "./Container.scss";

interface IContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: IContainerProps) => {
  return <div className={classNames("container", className)}>{children}</div>;
};

export default Container;
