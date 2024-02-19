import { FC, ReactNode, ChangeEvent } from "react";
import BootstrapForm from "react-bootstrap/Form";
import { IMocKFormSortData } from "../Sort/Sort";
import { IPriceRange, IYearRange } from "../../types/types";
import { ConvertedComplexObject } from "../../helpers/convertToComplexObject";

interface IFromProps {
  className?: string;
  formTitle: string;
  disabled?: boolean;
  options?: IMocKFormSortData[] | string[] | IPriceRange[] | IYearRange[] | ConvertedComplexObject[];
  formIcon?: ReactNode;
  isComplex?: boolean;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const DropDown: FC<IFromProps> = (props) => {
  const { formTitle, options, formIcon, className, onChange, isComplex = false, disabled = false } = props;

  let optionValues;

  if (isComplex) {
    optionValues = options?.map((option) =>
      typeof option === "string" ? null : (
        <option key={option.id} value={option.value}>
          {option.text}
        </option>
      )
    );
  } else {
    optionValues = options?.map((option) =>
      typeof option !== "string" ? null : (
        <option key={option} value={option}>
          {option}
        </option>
      )
    );
  }

  return (
    <>
      <BootstrapForm.Text>{formIcon}</BootstrapForm.Text>
      <BootstrapForm.Select className={className} aria-label="Default select example" disabled={disabled} onChange={onChange}>
        <option>{formTitle}</option>
        {optionValues}
      </BootstrapForm.Select>
    </>
  );
};

export default DropDown;
