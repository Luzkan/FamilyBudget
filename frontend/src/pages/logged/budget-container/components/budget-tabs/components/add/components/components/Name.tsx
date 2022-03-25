import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Mailbox } from "react-bootstrap-icons";

interface Props {
  handleInput: any;
  name: string;
}

const BudgetName = ({ handleInput, name }: Props) => {
  return (
    <InputGroup>
      <InputGroup.Text>
        <Mailbox />
      </InputGroup.Text>
      <FormControl
        placeholder="Budget Name"
        type="text"
        id={name}
        name={name}
        {...handleInput(name, {required: true, maxLength: 80})}
      />
    </InputGroup>
  );
};

export default BudgetName;
