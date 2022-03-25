import React, { useEffect } from "react";
import { Col, Row, Tab } from "react-bootstrap";
import { creatorsBudgets } from "../../../store/budgets/creators";
import BudgetPanes from "./components/budget-panes";
import BudgetTabs from "./components/budget-tabs";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { Budget, BudgetResponse } from "../../../types/budget";
import BudgetsTabPagination from "./components/paginations";

const BudgetContainer = () => {
  const dispatch = useDispatch();
  const budgetResponse: BudgetResponse = useSelector((state: RootStateOrAny) => state.budgets);

  console.log(budgetResponse);

  

  const paginatedBudgetsMock = budgetResponse.budgets.slice(0, 6);

  useEffect(() => {
    dispatch(creatorsBudgets.getAll());
  }, [dispatch]);


  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link0">
      <Row>
        <Col sm={3}>
          <BudgetTabs budgets={paginatedBudgetsMock} paginations={<BudgetsTabPagination />} />
        </Col>
        <Col sm={9} className="budget-pane">
          <BudgetPanes budgets={paginatedBudgetsMock} />
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default BudgetContainer;
