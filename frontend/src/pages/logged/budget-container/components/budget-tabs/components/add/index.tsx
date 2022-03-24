import React from "react";
import BMModal from "../../../../../../../common/components/button-modal/components/BMModal";
import AddBudgetButton from "./components/AddBudgetButton";

const AddBudget = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <AddBudgetButton showModal={() => setModalShow(true)} />
      <BMModal show={modalShow} onHide={() => setModalShow(false)} headerTitle={""} bodyContent={
        <>
          <h4>Hey</h4>
          <p>Ho</p>
        </>
      } />
    </>
  );
};

export default AddBudget;
