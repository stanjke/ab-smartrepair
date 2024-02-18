import { FC, ReactNode } from "react";
import BootstrapForm from "react-bootstrap/Form";
import { IMocKFormSortData } from "../Sort/Sort";
import { FilterOptionId } from "../../constants/constants";

interface IFromProps {
  className?: string;
  formTitle: string;
  disabled?: boolean;
  options?: IMocKFormSortData[] | string[];
  formIcon?: ReactNode;
  isComplex?: boolean;
  onChange?: () => void;
}

const DropDown: FC<IFromProps> = (props) => {
  const { formTitle, disabled = false, options, formIcon, className, isComplex = false, onChange } = props;

  if (isComplex) {
    const optionsValues = options?.map((option) => (
      <option key={option.id} value={option.value} onChange={onChange}>
        {option.text}
      </option>
    ));

    return (
      <>
        <BootstrapForm.Text>{formIcon}</BootstrapForm.Text>
        <BootstrapForm.Select className={className} aria-label="Default select example" disabled={disabled} onChange={onChange}>
          <option>{formTitle}</option>
          {optionsValues}
        </BootstrapForm.Select>
      </>
    );
  }

  const optionsValues = options?.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));

  return (
    <>
      <BootstrapForm.Text>{formIcon}</BootstrapForm.Text>
      <BootstrapForm.Select className={className} aria-label="Default select example" disabled={disabled} onChange={onChange}>
        <option>{formTitle}</option>
        {optionsValues}
      </BootstrapForm.Select>
    </>
  );
};

export default DropDown;
