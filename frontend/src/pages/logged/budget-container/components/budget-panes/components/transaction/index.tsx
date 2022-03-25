import React from "react";
import { Tab } from "react-bootstrap";
import { Budget } from "../../../../../../../types/budget";
import Header from "../header";
import BudgetPaneTable from "../table";

interface Props {
  budget: Budget;
  budgetItemIndex: number;
}

const Transaction = ({ budget, budgetItemIndex }: Props) => {

  const incomes = budget.incomes.map((income) => {
    return { ...income, type: "Income" };
  });
  const expenses = budget.expenses.map((expense) => {
    return { ...expense, type: "Expense" };
  });

  const items = [...incomes, ...expenses];

  return (
    <Tab.Pane eventKey={`#link${budgetItemIndex}`}>
      <Header title={`${budget.name} (${budget.total_budget}$)`} />
      <BudgetPaneTable items={items} budgetItemIndex={budgetItemIndex} />
    </Tab.Pane>
  );
};

export default Transaction;
