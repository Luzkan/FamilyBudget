import ModalForm from "common/modal-form"
import React from "react"
import { Button } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { creatorsTransaction } from "store/budget/creators"
import { TransactionForm } from "types/transaction_form"

import AddTransactionBody from "./transaction-body"

interface Props {
  budgetId: number
}

const BudgetContainerPaneHeaderAddTransaction = ({ budgetId }: Props) => {
  const { register, handleSubmit } = useForm<TransactionForm>()

  const dispatch = useDispatch()

  const onSubmit = (data: TransactionForm) => {
    dispatch(creatorsTransaction.add({ ...data, budgetId: budgetId }))
  }

  return (
    <>
      <ModalForm
        button={{
          text: "Transaction",
        }}
        modal={{
          headerTitle: "Add Transaction",
          bodyContent: <AddTransactionBody register={register} />,
          footer: [
            <Button type="submit" key={"confirm-transaction"}>
              Confirm
            </Button>,
          ],
          onSubmit: handleSubmit(onSubmit),
        }}
      />
    </>
  )
}

export default BudgetContainerPaneHeaderAddTransaction
