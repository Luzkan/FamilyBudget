import React from "react";
import { Table } from "react-bootstrap";
import { Expense, ExpenseCategory, Income, IncomeCategory } from "../../../../../../../types/transaction";
import TableHeader from "./components/TableHeader";
import TableItem from "./components/TableItem";

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

const BudgetPaneTable = ({ items, budgetItemIndex }: Props) => {
  const itemsToRender = items.map((item, index) => (
    <TableItem
      key={index}
      type={item.type}
      amount={item.amount}
      user={item.name}
      category={item.category}
    />
  ));

  return (
    <Table striped bordered hover>
      <TableHeader />
      <tbody>
        {itemsToRender}
      </tbody>
    </Table>
  );
};

export default BudgetPaneTable;
