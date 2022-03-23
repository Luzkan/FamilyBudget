import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Mailbox } from "react-bootstrap-icons";

const Email = () => {
  return (
    <InputGroup>
      <InputGroup.Text>
        <Mailbox />
      </InputGroup.Text>
      <FormControl placeholder="Email" type="email" />
    </InputGroup>
  );
};

export default Email;
