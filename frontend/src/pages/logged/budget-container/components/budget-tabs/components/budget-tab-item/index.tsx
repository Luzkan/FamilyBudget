import React from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { Budget } from "../../../../../../../types/budget";
import { User } from "../../../../../../../types/user";

interface Props {
  budget: Budget;
  budgetItemIndex: number;
}

const BudgetTabItem = ({budget, budgetItemIndex}: Props) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      action
      href={`#link${budgetItemIndex}`}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{budget.name}</div>
        {budget.users.map((user: User, index: number) => (
          <Badge pill className="mr-1" key={index}>
            {user.email}
          </Badge>
        ))}
      </div>
      <Badge bg="primary" pill>
        {budget.total_budget}
      </Badge>
    </ListGroup.Item>
  );
};

export default BudgetTabItem;
