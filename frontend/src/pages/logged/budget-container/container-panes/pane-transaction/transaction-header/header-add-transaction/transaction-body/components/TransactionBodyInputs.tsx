import ModalFormInputGroup from "common/modal-form/components/InputGroup"
import React from "react"
import { CardText, Cash } from "react-bootstrap-icons"
import { UseFormRegister } from "react-hook-form"
import { TransactionForm } from "types/transactions/transaction"

interface Props {
  handleInput: UseFormRegister<TransactionForm>
}

const AddTransactionBodyInputs = ({ handleInput }: Props) => {
  const IconCash = (): JSX.Element => <Cash />
  const IconCard = (): JSX.Element => <CardText />

  return (
    <>
      <ModalFormInputGroup
        handleInput={handleInput}
        icon={IconCard}
        formControlProps={{
          placeholder: "Transaction Name",
          type: "text",
          id: "name",
          name: "name",
        }}
      />
      <ModalFormInputGroup
        handleInput={handleInput}
        icon={IconCash}
        formControlProps={{
          placeholder: "Amount",
          type: "number",
          id: "amount",
          name: "amount",
        }}
      />
    </>
  )
}

export default AddTransactionBodyInputs
