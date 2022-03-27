import React from "react"
import { Form, InputGroup } from "react-bootstrap"
import { BoxSeam } from "react-bootstrap-icons"
import { UseFormRegister } from "react-hook-form"
import { TransactionForm } from "types/transactions/transaction"

interface Props {
  handleInput: UseFormRegister<TransactionForm>
  categories: string[]
}

const AddTransactionBodySelects = ({ handleInput, categories }: Props) => {
  // TODO: UseEffect or UseState -> on re-render, has to re-check the Form Select for the displayed value.
  return (
    <InputGroup>
      <InputGroup.Text>
        <BoxSeam />
      </InputGroup.Text>
      <Form.Select
        name="category"
        defaultValue={categories[0]}
        {...handleInput("category", {})}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </Form.Select>
    </InputGroup>
  )
}

export default AddTransactionBodySelects
