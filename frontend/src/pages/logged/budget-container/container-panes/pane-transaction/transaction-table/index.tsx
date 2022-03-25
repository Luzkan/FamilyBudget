import React from "react";
import { Table } from "react-bootstrap";
import { ExpenseCategory, IncomeCategory } from "types/transaction";

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
      type={item.type}
      amount={item.amount}
      user={item.name}
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
