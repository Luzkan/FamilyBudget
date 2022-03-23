import React from "react";
import { Col, Row, Tab } from "react-bootstrap";
import BudgetPanes from "./components/budget-panes";
import BudgetTabs from "./components/budget-tabs";

const BudgetContainer = () => {
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link0">
      <Row>
        <Col sm={3}>
          <BudgetTabs />
        </Col>
        <Col sm={9} className="budget-pane">
          <BudgetPanes />
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default BudgetContainer;
