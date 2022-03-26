import ModalForm from "common/modal-form";
import React from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { creatorsTransaction } from "store/transaction/creators";
import { TransactionForm } from "types/transaction_form";

import AddTransactionBody from "./transaction-body";

const BudgetContainerPaneHeaderAddTransaction = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TransactionForm>();

  const dispatch = useDispatch();

  const onSubmit = (data: TransactionForm) => {
    console.log(data);

    // dispatch(creatorsTransaction.addTransaction(data));
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
