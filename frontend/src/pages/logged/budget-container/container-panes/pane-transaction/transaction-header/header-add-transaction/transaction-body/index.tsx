import { ConfigDatabase } from "config/database/config";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { TransactionTypes } from "types/transaction";
import AddTransactionBodyInputs from "./components/TransactionBodyInputs";
import TransactionBodyRadio from "./components/TransactionBodyRadio";
import AddTransactionBodySelects from "./components/TransactionBodySelects";

interface Props {
  register: UseFormRegister<any>;
}

const AddTransactionBody = ({ register }: Props) => {
  const config: ConfigDatabase = require("config/database/config.json");
  
  const transactionTypes: TransactionTypes[] = Object.keys(config.transactionTypes) as TransactionTypes[];
  const [transactionType, setTransactionType] = useState<TransactionTypes>(
    transactionTypes[0]
  );

  const handleRadioClick = (transactionType: TransactionTypes): void => {
    setTransactionType(transactionType);
    console.log(transactionType);
  };

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
  );
};

export default AddTransactionBody;
