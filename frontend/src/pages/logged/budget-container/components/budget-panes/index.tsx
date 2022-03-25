import React from "react";
import { Tab } from "react-bootstrap";
import { Budget } from "../../../../../types/budget";
import Transaction from "./components/transaction";

interface Props {
  budgets: Budget[];
}

const BudgetPanes = ({budgets}: Props) => {

  return (
    <Tab.Content>
      {budgets.map((budget, index) => (
        <Transaction budget={budget} budgetItemIndex={index} key={index} />
      ))}
    </Tab.Content>
  );
};

export default BudgetPanes;
