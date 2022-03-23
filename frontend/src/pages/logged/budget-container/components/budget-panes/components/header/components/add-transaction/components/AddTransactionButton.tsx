import React from "react";
import { Button, ListGroup } from "react-bootstrap";

interface Props {
  showModal: () => void;
}

const AddTransactionButton = ({ showModal }: Props) => {
  return (
    <Button onClick={showModal}>
        Manage Users
    </Button>
  );
};

export default AddTransactionButton;
