import React from "react"
import { Pagination } from "react-bootstrap"

const BudgetContainerPagination = () => {
  const activePaginationTab = 1
  const paginations = []

  for (let number = 1; number <= 5; number++) {
    paginations.push(
      <Pagination.Item key={number} active={number === activePaginationTab}>
        {number}
      </Pagination.Item>
    )
  }

  return <>{paginations}</>
}

export default BudgetContainerPagination
