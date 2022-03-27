import React from "react"
import { Form, FormControl, ListGroup } from "react-bootstrap"

interface Search {
  value: string
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

interface Props {
  search: Search
}

const BudgetContainerTabSearchbar = ({ search }: Props) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="me-auto search-bar">
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Budgets..."
            className="md-5"
            aria-label="Search"
            value={search.value}
            onChange={search.onSearch}
          />
        </Form>
      </div>
    </ListGroup.Item>
  )
}

export default BudgetContainerTabSearchbar
function dispatch(arg0: any) {
  throw new Error("Function not implemented.")
}
