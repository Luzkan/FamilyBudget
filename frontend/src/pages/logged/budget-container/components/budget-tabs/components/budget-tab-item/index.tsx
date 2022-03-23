import React from "react";
import { Badge, ListGroup } from "react-bootstrap";

interface Props {
  budgetItemIndex: number;
}

const BudgetTabItem = ({budgetItemIndex}: Props) => {
  const budgetMock = 20
  const titleMock = "Turbośmieszki"
  const usersMock = "Marcel, Justyna, Daniel, Marcin"

  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      action
      href={`#link${budgetItemIndex}`}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">{titleMock}</div>
        {usersMock}
      </div>
      <Badge bg="primary" pill>
        {budgetMock}
      </Badge>
    </ListGroup.Item>
  );
};

export default BudgetTabItem;
