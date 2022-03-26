import React from "react"
import { ListGroup, Pagination } from "react-bootstrap"
import { Budget } from "types/budget"

import BudgetContainerTabAddBudget from "./tab-add-budget"
import BudgetContainerTabItem from "./tab-item"
import BudgetContainerTabSearchbar from "./tab-searchbar"

interface Props {
  budgets: Budget[]
  paginations: JSX.Element
}

const BudgetContainerTabs = ({ budgets, paginations }: Props) => {
  return (
    <ListGroup>
      <BudgetContainerTabAddBudget />
      <BudgetContainerTabSearchbar />
      {budgets.map((budget: Budget, index: number) => (
        <BudgetContainerTabItem
          budget={budget}
          budgetItemIndex={index}
          key={index}
        />
      ))}
      <Pagination>{paginations}</Pagination>
    </ListGroup>
  )
}

export default BudgetContainerTabs
