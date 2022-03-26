import React from "react";
import { Col, Row } from "react-bootstrap";
import { Budget } from "types/budget";

import BudgetContainerPaneHeaderAddTransaction from "./header-add-transaction";
import BudgetContainerPaneHeaderManageUsers from "./header-manage-users";

interface Props {
  budget: Budget;
}

const BudgetContainerPaneHeader = ({ budget }: Props) => {
  return (
    <Row>
      <Col xs={8}>
        <h2>{`${budget.name} (${budget.total_budget}$)`}</h2>
      </Col>
      <Col xs={2}>
        <BudgetContainerPaneHeaderAddTransaction budgetId={budget.id} />
      </Col>
      <Col xs={2}>
        <BudgetContainerPaneHeaderManageUsers />
      </Col>
    </Row>
  );
};

export default BudgetContainerPaneHeader;
