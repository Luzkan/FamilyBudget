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

  const [search, setSearch] = React.useState("")

  const debouncedChangeHandler = useCallback(
    _.debounce((searchQuery: string) => {
      dispatch(creatorsBudgets.get(searchQuery))
    }, 500),
    []
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    debouncedChangeHandler(e.target.value)
  }

  useEffect(() => {
    dispatch(creatorsBudgets.get(search))
  }, [dispatch])

  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link0">
      <Row>
        <Col sm={3}>
          <BudgetContainerTabs
            budgets={paginatedBudgets}
            search={{
              value: search,
              onSearch: handleSearch,
            }}
            paginations={<BudgetContainerPagination />}
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
