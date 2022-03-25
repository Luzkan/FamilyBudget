import React from "react";
import ButtonModal from "../../../../../../../../../common/components/button-modal"; // TODO: Absolute import

const ManageUsers = () => {
  return (
    <>
      <ButtonModal
        buttonText="Manage Users"
        modalHeaderTitle="Manage Users"
        modalBodyContent={
          <>
            <h4>Hey</h4>
            <p>Manager Users</p>
          </>
        }
        onSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
};

export default ManageUsers;
