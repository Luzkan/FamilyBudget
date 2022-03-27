import React from "react"
import { ListGroup, Pagination } from "react-bootstrap"
import { Budget } from "types/budget"

import BudgetContainerTabAddBudget from "./tab-add-budget"
import BudgetContainerTabItem from "./tab-item-budget"
import BudgetContainerTabSearchbar from "./tab-searchbar"

interface Search {
  value: string
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface Props {
  budgets: Budget[]
  search: Search
  paginations: JSX.Element
}

const BudgetContainerTabs = ({ budgets, search, paginations }: Props) => {
  return (
    <ListGroup>
      <BudgetContainerTabAddBudget />
      <BudgetContainerTabSearchbar search={search} />
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
