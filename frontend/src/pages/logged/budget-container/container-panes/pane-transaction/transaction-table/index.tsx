import React from "react"
import { Table } from "react-bootstrap"
import { ExpenseCategory } from "types/transactions/expense"
import { IncomeCategory } from "types/transactions/income"

import BudgetContainerPaneTableColumns from "./components/TableColumns"
import BudgetContainerPaneTableItems from "./components/TableItem"

interface Props {
  items: {
    type: string
    id_user: number
    amount: number
    name: string
    category: ExpenseCategory | IncomeCategory
  }[]
}

const BudgetContainerPaneTable = ({ items }: Props) => {
  const itemsToRender = items.map((item, index) => (
    <BudgetContainerPaneTableItems
      key={index}
      name={item.name}
      type={item.type}
      amount={item.amount}
      user={item.id_user}
      category={item.category}
    />
  ))

  return (
    <Table striped bordered hover>
      <BudgetContainerPaneTableColumns />
      <tbody>{itemsToRender}</tbody>
    </Table>
  )
}

export default BudgetContainerPaneTable
