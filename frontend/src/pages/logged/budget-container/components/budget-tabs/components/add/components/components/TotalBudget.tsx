import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Mailbox } from "react-bootstrap-icons";

interface Props {
  handleInput: any;
  name: string;
}

const TotalBudget = ({ handleInput, name }: Props) => {
  return (
    <InputGroup>
      <InputGroup.Text>
        <Mailbox />
      </InputGroup.Text>
      <FormControl
        placeholder="Total Budget"
        type="number"
        id={name}
        name={name}
        {...handleInput(name, {required: true, maxLength: 10})}
      />
    </InputGroup>
  );
};

export default TotalBudget;
