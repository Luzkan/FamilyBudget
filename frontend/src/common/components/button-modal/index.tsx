import React from "react";
import { Button } from "react-bootstrap";
import BMButton from "./components/BMButton";
import BMModal from "./components/BMModal";

interface Props {
  buttonText: string;
  modalHeaderTitle: string;
  modalBodyContent: JSX.Element;
  onSubmit: () => void;
}

const ButtonModal = ({
  buttonText,
  modalHeaderTitle,
  modalBodyContent,
  onSubmit,
}: Props) => {
  const [modalShow, setModalShow] = React.useState(false);

  const onHide = () => setModalShow(false);

  return (
    <>
      <BMButton showModal={() => setModalShow(true)} buttonText={buttonText} />
      <BMModal
        show={modalShow}
        onHide={onHide}
        onSubmit={onSubmit}
        headerTitle={modalHeaderTitle}
        bodyContent={modalBodyContent}
        bodyFooter={[<Button onClick={onHide}>Close</Button>]}
      />
    </>
  );
};

export default ButtonModal;
