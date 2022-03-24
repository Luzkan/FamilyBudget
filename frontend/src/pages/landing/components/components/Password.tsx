import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Lock } from "react-bootstrap-icons";

interface Props {
  handleInput: any;
  name: string;
  hint: string;
}

const Password = ({ handleInput, name, hint,  }: Props): JSX.Element => {
  return (
    <InputGroup>
      <InputGroup.Text>
        <Lock />
      </InputGroup.Text>
      <FormControl
        placeholder={hint}
        type="text"
        id={name}
        name={name}
        {...handleInput(name, {required: true, maxLength: 80, min: 8})}
      />
    </InputGroup>
  );
};

export default Password;
