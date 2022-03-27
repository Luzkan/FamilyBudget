import React from "react"
import { Badge, ListGroup } from "react-bootstrap"
import { Budget } from "types/budget"
import { User } from "types/user"

interface Props {
  budget: Budget
  budgetItemIndex: number
}

const BudgetContainerTabItem = ({ budget, budgetItemIndex }: Props) => {
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
          <div className="email-badge" key={index}>
            <Badge pill className="mr-1">
              {user.email}
            </Badge>
          </div>
        ))}
      </div>
      <div className="total-budget-badge">
        <Badge bg="primary" pill>
          {budget.total_budget}$
        </Badge>
      </div>
    </ListGroup.Item>
  )
}

export default BudgetContainerTabItem
