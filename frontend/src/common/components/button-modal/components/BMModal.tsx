import React from "react";
import { Form, Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
  headerTitle: string;
  bodyContent: JSX.Element;
  bodyFooter: JSX.Element[];
}

const BMModal = ({ show, onHide, onSubmit, headerTitle, bodyContent, bodyFooter }: Props): JSX.Element => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form className="" onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{headerTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {bodyContent}
        </Modal.Body>
        <Modal.Footer>
          {...bodyFooter}
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default BMModal;
