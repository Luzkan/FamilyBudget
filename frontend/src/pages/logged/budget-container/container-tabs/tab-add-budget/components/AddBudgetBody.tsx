import ModalFormInputGroup from "common/modal-form/components/InputGroup";
import React from "react";
import { UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<any>;
}

const AddBudgetBody = ({ register }: Props) => {
  return (
    <>
      <ModalFormInputGroup
        handleInput={register}
        icon={undefined} // TODO: Icon
        formControlProps={{
          placeholder: "Budget Name",
          type: "text",
          id: "name",
          name: "name",
        }}
      />
      <ModalFormInputGroup
        handleInput={register}
        icon={undefined} // TODO: Icon
        formControlProps={{
          placeholder: "Total Budget",
          type: "number",
          id: "totalBudget",
          name: "totalBudget",
        }}
      />
    </>
  );
};

export default AddBudgetBody;
