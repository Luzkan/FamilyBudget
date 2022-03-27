import React from "react"
import { Pagination } from "react-bootstrap"

interface Props {
  activePaginationTab: number
  handlePagination: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

const BudgetContainerPagination = ({
  activePaginationTab,
  handlePagination,
}: Props) => {
  const paginations = []

  for (let number = 1; number <= 5; number++) {
    paginations.push(
      <Pagination.Item
        key={number}
        active={number === activePaginationTab}
        onClick={handlePagination}
      >
        {number}
      </Pagination.Item>
    )
  }

  return <>{paginations}</>
}

export default BudgetContainerPagination
