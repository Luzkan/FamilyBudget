import React from "react";
import ButtonModal from "../../../../../../../../../common/components/button-modal";  // TODO: Absolute import

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
      />
    </>
  );
};

export default ManageUsers;
