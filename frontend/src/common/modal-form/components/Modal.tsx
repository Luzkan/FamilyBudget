import React from "react";
import { Form, Modal } from "react-bootstrap";

interface FunctionalHandlers {
  show: boolean;
  onHide: () => void;
  onSubmit: () => void;
}

interface Content {
  headerTitle: string;
  bodyContent: JSX.Element;
  bodyFooter: JSX.Element[];
}

interface Props {
  functionalHandlers: FunctionalHandlers;
  content: Content;
}

const ModalFormModal = ({
  functionalHandlers,
  content,
}: Props): JSX.Element => {
  return (
    <Modal
      show={functionalHandlers.show}
      onHide={functionalHandlers.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form className="" onSubmit={functionalHandlers.onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {content.headerTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{content.bodyContent}</Modal.Body>
        <Modal.Footer>{...content.bodyFooter}</Modal.Footer>
      </Form>
    </Modal>
  );
};

export default ModalFormModal;
