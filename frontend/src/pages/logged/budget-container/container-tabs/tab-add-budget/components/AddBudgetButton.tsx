import React from "react"
import { ListGroup } from "react-bootstrap"

interface Props {
  showModal: () => void
}

const AddBudgetButton = ({ showModal }: Props) => {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
      action
      onClick={showModal}
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">Add new Budget!</div>
      </div>
    </ListGroup.Item>
  )
}

export default AddBudgetButton
