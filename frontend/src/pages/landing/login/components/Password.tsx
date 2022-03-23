import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Lock } from 'react-bootstrap-icons';

const Password = () => {
  return (
    <InputGroup>
      <InputGroup.Text>
        <Lock/>
      </InputGroup.Text>
      <FormControl
        placeholder="Password"
        type="text"
      />
    </InputGroup>
  );
};

export default Password;
