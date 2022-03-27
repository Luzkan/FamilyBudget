import React, { useCallback, useEffect } from "react"
import { Col, Row, Tab } from "react-bootstrap"
import { RootStateOrAny, useDispatch, useSelector } from "react-redux"
import { creatorsBudgets } from "store/budget/creators"
import { Budget, BudgetResponse } from "types/budget"
import _ from "lodash"

import BudgetContainerPanes from "./container-panes"
import BudgetContainerTabs from "./container-tabs"
import BudgetContainerPagination from "./container-pagination"

const BudgetContainer = () => {
  const dispatch = useDispatch()
  const budgetResponse: BudgetResponse = useSelector(
    (state: RootStateOrAny) => state.budgets
  )

  const paginatedBudgets: Budget[] = budgetResponse.budgets
    ? budgetResponse.budgets.slice(0, 6)
    : []

  const [searchValue, setSearch] = React.useState("")
  const [currentPage, setPage] = React.useState(1)

  // https://ux.stackexchange.com/questions/95336/how-long-should-the-debounce-timeout-be
  const debouncedChangeHandler = useCallback(
    _.debounce((searchQuery, pageNumber) => {
      dispatch(creatorsBudgets.get(searchQuery, pageNumber))
    }, 50),
    []
  )

  const handlePagination = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setPage(Number(e.currentTarget.text))
    debouncedChangeHandler(searchValue, Number(e.currentTarget.text))
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    debouncedChangeHandler(e.target.value, 1) // always redirect to first page
  }

  useEffect(() => {
    dispatch(creatorsBudgets.get(searchValue, currentPage))
  }, [dispatch])

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link0">
      <Row>
        <Col sm={3}>
          <BudgetContainerTabs
            budgets={paginatedBudgets}
            search={{
              value: searchValue,
              onSearch: handleSearch,
            }}
            paginations={
              <BudgetContainerPagination
                activePaginationTab={currentPage}
                handlePagination={handlePagination}
              />
            }
          />
        </Col>
        <Col sm={9} className="budget-pane">
          <BudgetContainerPanes budgets={paginatedBudgets} />
        </Col>
      </Row>
    </Tab.Container>
  )
}

export default BudgetContainer
