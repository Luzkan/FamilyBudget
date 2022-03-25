import React from "react";
import { Tab } from "react-bootstrap";
import { Budget } from "../../../../../types/budget";
import Transaction from "./components/transaction";

interface Props {
  budgets: Budget[];
}

const BudgetPanes = ({budgets}: Props) => {
  const budgetsMock = Array(6).fill(0);

  return (
    <Tab.Content>
      {budgetsMock.map((_, index) => (
        <Transaction budgetItemIndex={index} key={index} />
      ))}
    </Tab.Content>
  );
};

export default BudgetPanes;
