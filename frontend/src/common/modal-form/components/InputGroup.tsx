import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { UseFormRegister } from "react-hook-form";

export interface FormControlProps {
  placeholder: string;
  type: string;
  id: string;
  name: string;
}

interface Props {
  handleInput: UseFormRegister<any>;
  icon: () => JSX.Element;
  formControlProps: FormControlProps;
}

const ModalFormInputGroup = ({
  handleInput,
  icon,
  formControlProps,
}: Props) => {
  return (
    <InputGroup>
      <InputGroup.Text>
        {icon()}
      </InputGroup.Text>
      <FormControl
        placeholder={formControlProps.placeholder}
        type={formControlProps.type}
        id={formControlProps.id}
        name={formControlProps.name}
        {...handleInput(formControlProps.name, {
          required: true,
          maxLength: 80,
        })}
      />
    </InputGroup>
  );
};

export default ModalFormInputGroup;
