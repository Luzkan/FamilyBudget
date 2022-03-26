import React from "react";
import { Table } from "react-bootstrap";
import { ExpenseCategory } from "types/expense";
import { IncomeCategory } from "types/income";

import BudgetContainerPaneTableColumns from "./components/TableColumns";
import BudgetContainerPaneTableItems from "./components/TableItem";

interface Props {
  items: {
    type: string;
    id_user: number;
    amount: number;
    name: string;
    category: ExpenseCategory | IncomeCategory;
  }[];
  budgetItemIndex: number;
}

const BudgetContainerPaneTable = ({ items, budgetItemIndex }: Props) => {
  const itemsToRender = items.map((item, index) => (
    <BudgetContainerPaneTableItems
      key={index}
      name={item.name}
      type={item.type}
      amount={item.amount}
      user={item.id_user}
      category={item.category}
    />
  ));

  return (
    <Table striped bordered hover>
      <BudgetContainerPaneTableColumns />
      <tbody>{itemsToRender}</tbody>
    </Table>
  );
};

export default BudgetContainerPaneTable;
