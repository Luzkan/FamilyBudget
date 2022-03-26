import React from "react"

interface Props {
  name: string
  amount: number
  type: string
  category: string
  user: number
}

const BudgetContainerPaneTableItems = ({
  name,
  amount,
  type,
  category,
  user,
}: Props) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{amount}</td>
      <td>{type}</td>
      <td>{category}</td>
      <td>{user}</td>
    </tr>
  )
}

export default BudgetContainerPaneTableItems
