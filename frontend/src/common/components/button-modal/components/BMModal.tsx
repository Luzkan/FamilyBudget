import React from "react";
import { Button, Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
  headerTitle: string;
  bodyContent: JSX.Element;
}

const BMModal = ({ show, onHide, headerTitle, bodyContent }: Props): JSX.Element => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{headerTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {bodyContent}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BMModal;
