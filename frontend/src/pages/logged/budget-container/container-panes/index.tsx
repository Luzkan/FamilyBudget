import React from "react";
import { Tab } from "react-bootstrap";
import { Budget } from "types/budget";

import BudgetContainerPaneTransaction from "./pane-transaction";

interface Props {
  budgets: Budget[];
}

const BudgetContainerPanes = ({ budgets }: Props) => {
  return (
    <Tab.Content>
      {budgets.map((budget, index) => (
        <BudgetContainerPaneTransaction
          budget={budget}
          budgetItemIndex={index}
          key={index}
        />
      ))}
    </Tab.Content>
  );
};

export default BudgetContainerPanes;
