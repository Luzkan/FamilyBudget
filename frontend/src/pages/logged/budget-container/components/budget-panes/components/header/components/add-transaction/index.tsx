import React from "react";
import ButtonModal from "../../../../../../../../../common/components/button-modal"; // TODO: Absolute import

const AddTransaction = () => {
  return (
    <>
      <ButtonModal
        buttonText="Transaction"
        modalHeaderTitle="New Budget"
        modalBodyContent={
          <>
            <h4>Hey</h4>
            <p>New Budget things</p>
          </>
        }
        onSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default AddTransaction;
