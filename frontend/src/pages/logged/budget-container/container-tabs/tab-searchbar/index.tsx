import React from "react"
import { Form, FormControl, ListGroup } from "react-bootstrap"

const BudgetContainerTabSearchbar = () => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="me-auto search-bar">
        {/* <div className="fw-bold">Search Budget...</div> */}
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search Budgets..."
            className="md-5"
            aria-label="Search"
          />
        </Form>
      </div>
    </ListGroup.Item>
  )
}

export default BudgetContainerTabSearchbar
