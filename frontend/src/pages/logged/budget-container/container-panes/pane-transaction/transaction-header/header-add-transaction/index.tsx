import ModalForm from "common/modal-form";
import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { TransactionForm } from "types/transaction";

import AddTransactionBody from "./components/AddTransactionBody";

const BudgetContainerPaneHeaderAddTransaction = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionForm>();

  const onSubmit = (data: TransactionForm) => {
    // TODO: send data to server
    throw new Error("Function not implemented.")
  };

  return (
    <>
      <ModalForm
        button={{
          text: "Transaction",
        }}
        modal={{
          headerTitle: "Add Transaction",
          bodyContent: <AddTransactionBody register={register} />,
          footer: [<Button type="submit">Confirm</Button>],
          onSubmit: handleSubmit(onSubmit),
        }}
      />
    </>
  );
};

export default BudgetContainerPaneHeaderAddTransaction;
