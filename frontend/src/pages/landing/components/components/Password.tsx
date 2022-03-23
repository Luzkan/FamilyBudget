import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Lock } from "react-bootstrap-icons";

interface Props {
  hint: string;
}

const Password = ({ hint }: Props): JSX.Element => {
  return (
    <InputGroup>
      <InputGroup.Text>
        <Lock />
      </InputGroup.Text>
      <FormControl placeholder={hint} type="text" />
    </InputGroup>
  );
};

export default Password;
