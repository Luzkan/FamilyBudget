import { ConfigDatabase } from "config/database/config"
import React, { useState } from "react"
import { UseFormRegister } from "react-hook-form"
import {
  TransactionForm,
  TransactionTypes,
} from "types/transactions/transaction"

import AddTransactionBodyInputs from "./components/TransactionBodyInputs"
import TransactionBodyRadio from "./components/TransactionBodyRadio"
import AddTransactionBodySelects from "./components/TransactionBodySelects"

// import config from "config/database/config.json";

interface Props {
  register: UseFormRegister<TransactionForm>
}

const AddTransactionBody = ({ register }: Props) => {
  // TODO, check the commented out import line
  const config: ConfigDatabase = require("config/database/config.json") // eslint-disable-line

  const transactionTypes: TransactionTypes[] = Object.keys(
    config.transactionTypes
  ) as TransactionTypes[]
  const [transactionType, setTransactionType] = useState<TransactionTypes>(
    transactionTypes[0]
  )

  const handleRadioClick = (newTransactionTypes: TransactionTypes): void => {
    setTransactionType(newTransactionTypes)
  }

  return (
    <>
      <TransactionBodyRadio
        handleInput={register}
        transactions={{
          types: transactionTypes,
          onClick: handleRadioClick,
        }}
      />
      <AddTransactionBodyInputs handleInput={register} />
      <AddTransactionBodySelects
        handleInput={register}
        categories={
          transactionType === "expense"
            ? config.transactionTypes.expense.categories
            : config.transactionTypes.income.categories
        }
      />
    </>
  )
}

export default AddTransactionBody
