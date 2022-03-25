import ModalFormInputGroup from "common/modal-form/components/InputGroup";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
}

const ManageUsersBody = ({ register }: Props) => {
  return (
    <>
      <h4>Hey</h4>
      <p>Manager Users</p>
    </>
  );
};

export default ManageUsersBody;
