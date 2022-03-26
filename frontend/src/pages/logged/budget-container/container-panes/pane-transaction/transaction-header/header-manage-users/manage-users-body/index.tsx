import React from "react"
import { Form } from "react-bootstrap"
import { UseFormRegister } from "react-hook-form"

export interface UserForm {
  id: number
  email: string
  isInBudget: boolean
}

interface Props {
  manageUsers: UserForm[]
  register: UseFormRegister<undefined>
}

const BudgetContainerPaneHeaderManageUsersBody = ({
  manageUsers,
  register,
}: Props) => {
  return (
    <>
      {manageUsers.map((user) => (
        <div key={`default-${user.id}`} className="mb-3">
          <Form.Check
            type="checkbox"
            id={`default-${user.id}`}
            defaultChecked={user.isInBudget}
            label={user.email}
            value={user.email}
            {...register(`${user.id}`)}
          />
        </div>
      ))}
    </>
  )
}

export default BudgetContainerPaneHeaderManageUsersBody
