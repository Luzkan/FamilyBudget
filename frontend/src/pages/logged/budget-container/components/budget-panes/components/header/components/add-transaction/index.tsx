import React from "react";
import ButtonModal from "../../../../../../../../../common/components/button-modal";  // TODO: Absolute import

const AddTransaction = () => {
  return (
    <>
      <ButtonModal
        buttonText="New Transaction"
        modalHeaderTitle="New Budget"
        modalBodyContent={
          <>
            <h4>Hey</h4>
            <p>New Budget things</p>
          </>
        }
      />
    </>
  );
};

export default AddTransaction;
