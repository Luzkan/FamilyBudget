import React from "react";
import BMButton from "./components/BMButton";
import BMModal from "./components/BMModal";

interface Props {
  buttonText: string;
  modalHeaderTitle: string;
  modalBodyContent: JSX.Element;
}

const ButtonModal = ({ buttonText, modalHeaderTitle, modalBodyContent }: Props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <BMButton showModal={() => setModalShow(true)} buttonText={buttonText} />
      <BMModal show={modalShow} onHide={() => setModalShow(false)} headerTitle={modalHeaderTitle} bodyContent={modalBodyContent}/>
    </>
  );
};

export default ButtonModal;
