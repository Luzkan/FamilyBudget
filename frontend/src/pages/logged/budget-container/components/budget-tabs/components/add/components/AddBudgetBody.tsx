import React from "react";
import { UseFormRegister } from "react-hook-form";
import BudgetName from "./components/Name";
import TotalBudget from "./components/TotalBudget";

interface Props {
  register: UseFormRegister<any>;
}

const AddBudgetBody = ({ register }: Props) => {
  return (
    <>
      <BudgetName handleInput={register} name={"name"} />
      <TotalBudget handleInput={register} name={"totalBudget"} />
    </>
  );
};

export default AddBudgetBody;
