import React from "react";
import { Button, Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
}

const AddBudgetModal = ({ show, onHide }: Props): JSX.Element => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">New Budget</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Something</h4>
        <p>New Budget things</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBudgetModal;
