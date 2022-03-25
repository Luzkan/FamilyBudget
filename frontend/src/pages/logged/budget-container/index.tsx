import React, { useEffect } from "react";
import { Col, Row, Tab } from "react-bootstrap";
import budgetService from "../../../services/budget.service";
import { creatorsBudgets } from "../../../store/budgets/creators";
import BudgetPanes from "./components/budget-panes";
import BudgetTabs from "./components/budget-tabs";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";

const BudgetContainer = () => {
  const dispatch = useDispatch();
  const budgets = useSelector((state: RootStateOrAny) => state.budgets);

  useEffect(() => {
    dispatch(creatorsBudgets.getAll());
  }, [dispatch]);

  console.log(budgets);

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
