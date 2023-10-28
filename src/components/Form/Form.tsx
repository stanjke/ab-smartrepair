import { FC, ReactNode } from 'react'
import BootstrapForm from 'react-bootstrap/Form'
import { IMocKFormSortData } from '../Sort/Sort'

interface IFromProps {
    formTitle: string,
    disabled?: boolean,
    options?: IMocKFormSortData[],
    formIcon?: ReactNode
}

const Form: FC<IFromProps> = (props) => {

    const {
        formTitle,
        disabled,
        options,
        formIcon
    } = props

    const optionsValues = options?.map(option => <option key={option.id} value={option.value}>{option.text}</option>)

    return (
        <>
            <BootstrapForm.Text>
                {formIcon}
            </BootstrapForm.Text>
            <BootstrapForm.Select
                aria-label="Default select example"
                disabled={disabled}

            >
                <option>{formTitle}</option>
                {optionsValues}
            </BootstrapForm.Select>
        </>
    )
}

Form.defaultProps = {
    disabled: false,
    options: [],
    formIcon: '',
}

export default Form