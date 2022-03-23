import React from "react";
import AddTransactionButton from "./components/AddTransactionButton";
import AddTransactionModal from "./components/AddTransactionModal";


const AddTransaction = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <AddTransactionButton showModal={() => setModalShow(true)} />
      <AddTransactionModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default AddTransaction;
