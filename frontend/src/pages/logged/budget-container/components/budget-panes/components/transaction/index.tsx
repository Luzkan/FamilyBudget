import React from "react";
import { Col, ListGroup, Row, Tab } from "react-bootstrap";
import Header from "../header";
import BudgetPaneTable from "../table";

interface Props {
  budgetItemIndex: number;
}

const Transaction = ({ budgetItemIndex }: Props) => {
  return (
    <Tab.Pane eventKey={`#link${budgetItemIndex}`}>
      <Header budgetName={`Budget ${budgetItemIndex}`} />
      <BudgetPaneTable budgetItemIndex={budgetItemIndex} />
    </Tab.Pane>
  );
};

export default Transaction;
