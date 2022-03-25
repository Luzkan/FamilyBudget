import React from "react";
import { Tab } from "react-bootstrap";
import { Budget } from "types/budget";

import BudgetContainerPaneHeader from "./transaction-header";
import BudgetContainerPaneTable from "./transaction-table";

interface Props {
  budget: Budget;
  budgetItemIndex: number;
}

const BudgetContainerPaneTransaction = ({ budget, budgetItemIndex }: Props) => {
  const incomes = budget.incomes.map((income) => {
    return { ...income, type: "Income" };
  });
  const expenses = budget.expenses.map((expense) => {
    return { ...expense, type: "Expense" };
  });

  const items = [...incomes, ...expenses];

  return (
    <Tab.Pane eventKey={`#link${budgetItemIndex}`}>
      <BudgetContainerPaneHeader
        title={`${budget.name} (${budget.total_budget}$)`}
      />
      <BudgetContainerPaneTable
        items={items}
        budgetItemIndex={budgetItemIndex}
      />
    </Tab.Pane>
  );
};

export default BudgetContainerPaneTransaction;
