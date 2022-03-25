import React from "react";
import { Col, Row } from "react-bootstrap";

import BudgetContainerPaneHeaderAddTransaction from "./header-add-transaction";
import BudgetContainerPaneHeaderManageUsers from "./header-manage-users";

interface Props {
  title: string;
}

const BudgetContainerPaneHeader = ({ title }: Props) => {
  return (
    <Row>
      <Col xs={8}>
        <h2>{title}</h2>
      </Col>
      <Col xs={2}>
        <BudgetContainerPaneHeaderAddTransaction />
      </Col>
      <Col xs={2}>
        <BudgetContainerPaneHeaderManageUsers />
      </Col>
    </Row>
  );
};

export default BudgetContainerPaneHeader;
