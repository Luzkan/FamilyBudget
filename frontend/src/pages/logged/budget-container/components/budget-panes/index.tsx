import React from "react";
import { Tab } from "react-bootstrap";
import Transaction from "./components/transaction";

const BudgetPanes = () => {
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
