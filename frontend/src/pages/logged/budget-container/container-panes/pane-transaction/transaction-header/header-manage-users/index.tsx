import ModalForm from "common/modal-form";
import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import ManageUsersBody from "./components/ManageUsersBody";

const BudgetContainerPaneHeaderManageUsers = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<undefined>();

  const onSubmit = (data: undefined) => {
    // TODO: send data to server
    throw new Error("Function not implemented.");
  };

  return (
    <>
      <ModalForm
        button={{
          text: "Manage Users",
        }}
        modal={{
          headerTitle: "Manage Users",
          bodyContent: <ManageUsersBody register={register} />,
          footer: [<Button>Close</Button>],
          onSubmit: handleSubmit(onSubmit),
        }}
      />
    </>
  );
};

export default BudgetContainerPaneHeaderManageUsers;
