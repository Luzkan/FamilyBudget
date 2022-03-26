import React, { useEffect } from "react";
import { Col, Row, Tab } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { creatorsBudgets } from "store/budget/creators";
import { BudgetResponse } from "types/budget";

import BudgetContainerPanes from "./container-panes";
import BudgetContainerTabs from "./container-tabs";
import BudgetContainerPagination from "./container-pagination";

const BudgetContainer = () => {
  const dispatch = useDispatch();
  const budgetResponse: BudgetResponse = useSelector(
    (state: RootStateOrAny) => state.budgets
  );

  console.log(budgetResponse);

  const paginatedBudgetsMock = budgetResponse.budgets.slice(0, 6);

  useEffect(() => {
    dispatch(creatorsBudgets.getAll());
  }, [dispatch]);

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link0">
      <Row>
        <Col sm={3}>
          <BudgetContainerTabs
            budgets={paginatedBudgetsMock}
            paginations={<BudgetContainerPagination />}
          />
        </Col>
        <Col sm={9} className="budget-pane">
          <BudgetContainerPanes budgets={paginatedBudgetsMock} />
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default BudgetContainer;
