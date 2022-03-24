import React from "react";
import { Button } from "react-bootstrap";

interface Props {
  showModal: () => void;
  buttonText: string;
}

const BMButton = ({ showModal, buttonText }: Props) => {
  return (
    <Button onClick={showModal}>
      {buttonText}
    </Button>
  );
};

export default BMButton;
