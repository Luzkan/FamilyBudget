import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import { UseFormRegister } from "react-hook-form"
import { TransactionForm } from "types/transaction_form"

interface Transactions {
  types: string[]
  onClick: (type: string) => void
}

interface Props {
  handleInput: UseFormRegister<TransactionForm>
  transactions: Transactions
}

const AddTransactionBody = ({ handleInput, transactions }: Props) => {
  const capitalize = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1)
  }

  return (
    <InputGroup>
      <div key={``} className="mb-3">
        {transactions.types.map((transactionType, index) => (
          <Form.Check
            inline
            key={index}
            label={capitalize(transactionType)}
            name={`group-transaction-type`}
            type="radio"
            value={transactionType}
            defaultChecked={transactionType === transactions.types[0]}
            onClick={() => transactions.onClick(transactionType)}
            id={`inline-radio-${index}`}
            {...handleInput("transactionType", {})}
          />
        ))}
      </div>
    </InputGroup>
  )
}

export default AddTransactionBody
