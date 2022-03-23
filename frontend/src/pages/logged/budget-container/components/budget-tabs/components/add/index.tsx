import React from "react";
import AddBudgetButton from "./components/AddBudgetButton";
import AddBudgetModal from "./components/AddBudgetModal";

const Add = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <AddBudgetButton showModal={() => setModalShow(true)} />
      <AddBudgetModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

export default Add;
