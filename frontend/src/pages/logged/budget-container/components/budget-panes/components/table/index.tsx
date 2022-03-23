import React from "react";
import { Col, ListGroup, Row, Tab, Table } from "react-bootstrap";
import Header from "../header";

interface Props {
  budgetItemIndex: number;
}

const BudgetPaneTable = ({ budgetItemIndex }: Props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Amount</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Expense</td>
          <td>500</td>
          <td>Marcel</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Income</td>
          <td>400</td>
          <td>Justyna</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Expense</td>
          <td>900</td>
          <td>Marcin</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default BudgetPaneTable;
