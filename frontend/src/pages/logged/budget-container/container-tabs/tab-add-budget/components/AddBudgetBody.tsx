import ModalFormInputGroup from "common/modal-form/components/InputGroup"
import React from "react"
import { CardText, Cash } from "react-bootstrap-icons"
import { UseFormRegister } from "react-hook-form"
import { AddNewBudgetForm } from "types/budget"

interface Props {
  register: UseFormRegister<AddNewBudgetForm>
}

const AddBudgetBody = ({ register }: Props) => {
  const IconCash = (): JSX.Element => <Cash />
  const IconCard = (): JSX.Element => <CardText />

  return (
    <>
      <ModalFormInputGroup
        handleInput={register}
        icon={IconCard}
        formControlProps={{
          placeholder: "Budget Name",
          type: "text",
          id: "name",
          name: "name",
        }}
      />
      <ModalFormInputGroup
        handleInput={register}
        icon={IconCash}
        formControlProps={{
          placeholder: "Total Budget",
          type: "number",
          id: "totalBudget",
          name: "totalBudget",
        }}
      />
    </>
  )
}

export default AddBudgetBody
